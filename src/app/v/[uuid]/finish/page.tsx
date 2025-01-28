'use client';

import { useState, useEffect } from 'react';
import styles from './finish.module.scss';
import {
  IconLongCloud,
  IconSun,
  IconEdge,
  IconFlag,
} from '../../../../../public/icons';
import {
  MAIN_ITEM_IMAGES,
  SUB_ITEM_IMAGES,
  GARNISH_ITEM_IMAGES,
} from '@/constants/item-images';
import useTteokgukImage from '@/hooks/useTteokgukImage';
import { useRouter } from 'next/navigation';
import { OptimizedImage } from '@/components/common/OptimizedImage';
import { useResultStore } from '@/store/result';
import Finishing from '@/components/pages/finish-tteokguk/finishing';

export default function FinishedTteokguk() {
  const [isFinishing, setIsFinishing] = useState(true);
  const router = useRouter();
  const { result } = useResultStore();

  useEffect(() => {
    const hasSeenFinishing = sessionStorage.getItem('hasSeenFinishing');

    if (!hasSeenFinishing) {
      sessionStorage.setItem('hasSeenFinishing', 'true');
      const timer = setTimeout(() => {
        setIsFinishing(false);
      }, 4000);

      return () => clearTimeout(timer);
    } else {
      setIsFinishing(false);
    }
  }, []);

  const tteokgukImage = useTteokgukImage(result?.yuksu[0]?.toLowerCase());

  const renderSelectedItems = () => {
    if (!result) return null;

    return (
      <>
        <div className={styles.selectedSubItems}>
          {result.sub?.map((id, index) => {
            const lowerId = id.toLowerCase();
            return (
              SUB_ITEM_IMAGES[lowerId] && (
                <OptimizedImage
                  key={`${lowerId}-${index}`}
                  src={SUB_ITEM_IMAGES[lowerId]}
                  alt={lowerId}
                  className={`${styles.selectedSubItem} ${
                    lowerId === 'gul' ? styles.gulPosition : ''
                  } ${lowerId === 'huru' ? styles.huruPosition : ''}`}
                />
              )
            );
          })}
        </div>
        <div className={styles.selectedMainItems}>
          {result.main?.map((id, index) => {
            const lowerId = id.toLowerCase();
            return (
              MAIN_ITEM_IMAGES[lowerId] && (
                <OptimizedImage
                  key={`${lowerId}-${index}`}
                  src={MAIN_ITEM_IMAGES[lowerId]}
                  alt={lowerId}
                  className={styles.selectedMainItem}
                />
              )
            );
          })}
        </div>
        <div className={styles.selectedGarnishItems}>
          {result.garnish?.map((id, index) => {
            const lowerId = id.toLowerCase();
            return (
              GARNISH_ITEM_IMAGES[lowerId] && (
                <OptimizedImage
                  key={`${lowerId}-${index}`}
                  src={GARNISH_ITEM_IMAGES[lowerId]}
                  alt={lowerId}
                  className={styles.selectedGarnishItem}
                />
              )
            );
          })}
        </div>
      </>
    );
  };

  if (isFinishing) {
    return <Finishing />;
  }

  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <p>우리의 궁합</p>
        <p>{result?.myScore}점</p>
        <div className={styles.subTextContainer}>
          <p>{result?.content}</p>
        </div>
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
          <div className={styles.flagContainer}>
            <OptimizedImage
              src={IconFlag}
              alt="국기"
              className={styles.flagIcon}
            />
            <p>{result?.title}</p>
          </div>
          <OptimizedImage
            src={tteokgukImage}
            alt="떡국"
            width={238}
            height={183}
            className={styles.tteokgukImage}
          />
          {renderSelectedItems()}
        </div>
      </div>
      <div className={styles.topBackground} />
      <div className={styles.bottomBackground} />
      <div className={styles.buttonContainer}>
        <button
          className={styles.rankingButton}
          onClick={() => router.push(`/v/${result?.ownerUUID}/ranking`)}
        >
          내 순위 보기
        </button>
        <button
          className={styles.testButton}
          onClick={() => {
            router.push('/');
          }}
        >
          나도 만들기
        </button>
      </div>
    </div>
  );
}
