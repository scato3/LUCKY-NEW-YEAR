'use client';

import styles from './ranking.module.scss';
import { OptimizedImage } from '@/components/common/OptimizedImage';
import { IconLongCloud, IconSun, IconFlag } from '../../../../public/icons';
import { useGetRanking } from '@/api/query/recipe';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { shareLink } from '@/utils/share';

export default function RankingContainer({ uuid }: { uuid: string }) {
  const router = useRouter();

  const [currentPage, setCurrentPage] = useState(1);
  const { data } = useGetRanking({
    userUUID: uuid,
    page: currentPage,
    size: 6,
  });

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className={styles.container}>
      <OptimizedImage
        src={IconLongCloud}
        alt="구름 아이콘"
        className={styles.cloudIcon}
      />
      <OptimizedImage
        src={IconSun}
        alt="태양 아이콘"
        className={styles.sunIcon}
      />
      <OptimizedImage
        src={IconLongCloud}
        alt="구름 아이콘"
        className={styles.cloudSecondIcon}
      />
      {data?.totalPages !== 0 ? (
        <>
          <div className={styles.titleContainer}>
            <p className={styles.title}>별명을 눌러서</p>
            <p className={styles.title}>
              친구들이 보낸 떡국과 신년 인사를 확인해보세요
            </p>
          </div>
          <div className={styles.rankingContainer}>
            <div className={styles.rankingList}>
              <OptimizedImage
                src={IconFlag}
                alt="깃발 아이콘"
                className={styles.flagIcon}
              />
              <div className={styles.rankingTitle}>
                <p>{'< 랭킹 보드 >'}</p>
              </div>
              {data?.rankList?.map((item, index) => (
                <div
                  key={index}
                  className={styles.rankingItem}
                  onClick={() => {
                    router.push(
                      `/v/${uuid}/ranking/detail?uuid=${item.userUUID}`
                    );
                  }}
                >
                  {index < 3 && (
                    <div
                      className={`${styles.medal} ${styles[`medal${index + 1}`]}`}
                    >
                      {index + 1}
                    </div>
                  )}
                  <span className={styles.name}>{item.nickname}</span>
                  <span className={styles.score}>{item.score}점</span>
                </div>
              ))}
            </div>
          </div>
          {data && (
            <div className={styles.paginationContainer}>
              {Array.from({ length: data.totalPages }).map((_, index) => (
                <div
                  key={index}
                  className={`${styles.pageIndicator} ${
                    currentPage === index + 1 ? styles.active : ''
                  }`}
                  onClick={() => handlePageChange(index + 1)}
                />
              ))}
            </div>
          )}
        </>
      ) : (
        <div className={styles.emptyContainer}>
          <p>친구들이 아직 참여하지 않았네요</p>
          <p>테스트를 공유하고 랭킹을 확인해 보세요</p>
        </div>
      )}
      <div className={styles.buttonContainer}>
        <button
          className={styles.button}
          onClick={() => {
            const shareUrl = `${window.location.origin}/v/${uuid}`;
            shareLink({ url: shareUrl });
          }}
        >
          링크 보내기
        </button>
      </div>
    </div>
  );
}
