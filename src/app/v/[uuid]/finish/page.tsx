'use client';

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
import { useRecipeStore } from '@/store/recipe';
import { useResultStore } from '@/store/result';

export default function FinishedTteokguk() {
  const router = useRouter();
  const { yuksu, main, sub, garnish } = useRecipeStore();
  const { result } = useResultStore();

  const tteokgukImage = useTteokgukImage(yuksu[0]);

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
