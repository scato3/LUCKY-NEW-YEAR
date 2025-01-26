'use client';

import styles from './ranking.module.scss';
import { OptimizedImage } from '@/components/common/OptimizedImage';
import { IconLongCloud, IconSun, IconFlag } from '../../../../public/icons';

export default function RankingContainer() {
  const hasRankingData = true;

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
      {hasRankingData ? (
        <>
          <div className={styles.titleContainer}>
            <p className={styles.title}>별명을 놓쳐서</p>
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
              {Array.from({ length: 6 }).map((_, index) => (
                <div key={index} className={styles.rankingItem}>
                  <span className={styles.name}>강아지</span>
                  <span className={styles.score}>120점</span>
                </div>
              ))}
            </div>
          </div>
        </>
      ) : (
        <div className={styles.emptyContainer}>
          <p>친구들이 아직 참여하지 않았네요</p>
          <p>테스트를 공유하고 랭킹을 확인해 보세요</p>
        </div>
      )}
      <div className={styles.buttonContainer}>
        <button className={styles.button}>링크 보내기</button>
      </div>
    </div>
  );
}
