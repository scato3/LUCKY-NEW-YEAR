'use client';

import styles from './detail.module.scss';
import { IconLongCloud, IconSun, IconFlag } from '../../../../public/icons';
import {
  MAIN_ITEM_IMAGES,
  SUB_ITEM_IMAGES,
  GARNISH_ITEM_IMAGES,
} from '@/constants/item-images';
import useTteokgukImage from '@/hooks/useTteokgukImage';
import { OptimizedImage } from '@/components/common/OptimizedImage';
import { useGetDetailRanking } from '@/api/query/recipe';
import { useSearchParams } from 'next/navigation';
import { IconResultBox } from '../../../../public/icons';

interface DetailClientProps {
  ownerUUID: string;
}

export default function DetailClient({ ownerUUID }: DetailClientProps) {
  const searchParams = useSearchParams();
  const findUUID = searchParams.get('uuid');
  const { data, isLoading } = useGetDetailRanking({
    ownerUUID,
    findUUID: findUUID || '',
  });

  const tteokgukImage = useTteokgukImage((data?.yuksu[0] || '').toLowerCase());

  if (!findUUID || isLoading || !data) return null;

  const renderSelectedItems = () => {
    return (
      <>
        <div className={styles.selectedSubItems}>
          {data.sub.map((id, index) => (
            <OptimizedImage
              key={`${id}-${index}`}
              src={SUB_ITEM_IMAGES[id.toLowerCase()]}
              alt={id}
              className={`${styles.selectedSubItem} ${
                id.toLowerCase() === 'gul' ? styles.gulPosition : ''
              } ${id.toLowerCase() === 'huru' ? styles.huruPosition : ''}`}
            />
          ))}
        </div>
        <div className={styles.selectedMainItems}>
          {data.main.map(
            (id, index) =>
              MAIN_ITEM_IMAGES[id.toLowerCase()] && (
                <OptimizedImage
                  key={`${id}-${index}`}
                  src={MAIN_ITEM_IMAGES[id.toLowerCase()]}
                  alt={id}
                  className={styles.selectedMainItem}
                />
              )
          )}
        </div>
        <div className={styles.selectedGarnishItems}>
          {data.garnish.map(
            (id, index) =>
              GARNISH_ITEM_IMAGES[id.toLowerCase()] && (
                <OptimizedImage
                  key={`${id}-${index}`}
                  src={GARNISH_ITEM_IMAGES[id.toLowerCase()]}
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
        <p>{data.nickname}님과</p>
        <p>{data.score}점</p>
        <div className={styles.subTextContainer}>
          <p>{data.content}</p>
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
        <div className={styles.tteokgukContainer}>
          <div className={styles.flagContainer}>
            <OptimizedImage
              src={IconFlag}
              alt="국기"
              className={styles.flagIcon}
            />
            <p>{data?.title}</p>
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
      <div className={styles.messageInputWrapper}>
        <div className={styles.messageInput}>
          {data?.message}
          <OptimizedImage
            src={IconResultBox}
            alt="메시지 배경"
            fill
            priority
            className={styles.messageBackground}
          />
        </div>
      </div>
    </div>
  );
}
