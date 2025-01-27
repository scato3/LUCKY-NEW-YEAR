'use client';

import styles from './tteokguk-finished.module.scss';
import { IconLongCloud, IconSun, IconEdge } from '../../../../public/icons';
import {
  MAIN_ITEM_IMAGES,
  SUB_ITEM_IMAGES,
  GARNISH_ITEM_IMAGES,
} from '@/constants/item-images';
import useTteokgukImage from '@/hooks/useTteokgukImage';
import { useRouter, useSearchParams } from 'next/navigation';
import { OptimizedImage } from '@/components/common/OptimizedImage';
import { IconYungi } from '../../../../public/icons';
import { useRecipeStore } from '@/store/recipe';

export default function FinishedTteokguk() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const uuid = searchParams.get('uuid');
  const { yuksu, main, sub, garnish } = useRecipeStore();

  const tteokgukImage = useTteokgukImage(yuksu[0]);

  const handleShare = async () => {
    const shareUrl = `${window.location.origin}/v/${uuid}`;
    const isMobile = /Android|iPhone|iPad|Mobile/i.test(navigator.userAgent);

    if (isMobile) {
      try {
        await navigator.share({
          title: '떡국 우정테스트',
          text: '나만의 떡국을 만들어서 친구와 우정을 확인해보세요!',
          url: shareUrl,
        });
      } catch (error) {
        console.error('공유에 실패했습니다', error);
      }
    } else {
      const textarea = document.createElement('textarea');
      textarea.value = shareUrl;
      document.body.appendChild(textarea);
      textarea.select();
      try {
        document.execCommand('copy');
        alert('링크가 복사되었습니다');
      } catch (error) {
        console.error('링크 복사에 실패했습니다', error);
      }
      document.body.removeChild(textarea);
    }
  };

  const renderSelectedItems = () => {
    return (
      <>
        <div className={styles.selectedSubItems}>
          {sub.map(
            (id, index) =>
              SUB_ITEM_IMAGES[id] && (
                <OptimizedImage
                  key={`${id}-${index}`}
                  src={SUB_ITEM_IMAGES[id]}
                  alt={id}
                  className={`${styles.selectedSubItem} ${
                    id === 'gul' ? styles.gulPosition : ''
                  } ${id === 'huru' ? styles.huruPosition : ''}`}
                />
              )
          )}
        </div>
        <div className={styles.selectedMainItems}>
          {main.map(
            (id, index) =>
              MAIN_ITEM_IMAGES[id] && (
                <OptimizedImage
                  key={`${id}-${index}`}
                  src={MAIN_ITEM_IMAGES[id]}
                  alt={id}
                  className={styles.selectedMainItem}
                />
              )
          )}
        </div>
        <div className={styles.selectedGarnishItems}>
          {garnish.map(
            (id, index) =>
              GARNISH_ITEM_IMAGES[id] && (
                <OptimizedImage
                  key={`${id}-${index}`}
                  src={GARNISH_ITEM_IMAGES[id]}
                  alt={id}
                  className={styles.selectedGarnishItem}
                />
              )
          )}
        </div>
      </>
    );
  };

  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <p>나만의 떡국 완성!</p>
        <p>친구에게 링크를 보내서</p>
        <p>서로의 우정을 확인해보세요</p>
      </div>
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
      <div className={styles.edgeContainer}>
        <OptimizedImage
          src={IconEdge}
          alt="모서리 장식"
          className={styles.edgeImage}
        />
        <div className={styles.tteokgukContainer}>
          <OptimizedImage
            src={tteokgukImage}
            alt="떡국"
            width={238}
            height={183}
            className={styles.tteokgukImage}
          />
          <OptimizedImage
            src={IconYungi}
            alt="연기"
            className={styles.yungiIcon}
          />
          {renderSelectedItems()}
        </div>
      </div>
      <div className={styles.topBackground} />
      <div className={styles.bottomBackground} />
      <div className={styles.buttonContainer}>
        <button
          className={styles.rankingButton}
          onClick={() => router.push('./my-tteokguk-make')}
        >
          랭킹 보기
        </button>
        <button className={styles.testButton} onClick={handleShare}>
          테스트 보내기
        </button>
      </div>
    </div>
  );
}
