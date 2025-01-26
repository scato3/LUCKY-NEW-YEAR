'use client';

import styles from './tteokguk-finished.module.scss';
import { IconLongCloud, IconSun, IconEdge } from '../../../../public/icons';
import {
  MAIN_ITEM_IMAGES,
  SUB_ITEM_IMAGES,
  GARNISH_ITEM_IMAGES,
} from '@/constants/item-images';
import useTteokgukImage from '@/hooks/useTteokgukImage';
import { useRouter } from 'next/navigation';
import { OptimizedImage } from '@/components/common/OptimizedImage';
import { IconYungi } from '../../../../public/icons';

export default function FinishedTteokguk() {
  const router = useRouter();

  // 목데이터 - ingredients.ts에서 정의된 아이템들 중에서 선택
  const selectedYuksu = 'sagol'; // 사골육수
  const selectedMain = ['garae', 'kimchi']; // 가래떡, 김치만두
  const selectedSub = ['sogogi', 'gul']; // 소고기, 굴
  const selectedGarnish = ['gyeran', 'pa', 'gim']; // 계란, 파, 김

  const tteokgukImage = useTteokgukImage(selectedYuksu);

  const renderSelectedItems = () => {
    return (
      <>
        <div className={styles.selectedSubItems}>
          {selectedSub.map(
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
          {selectedMain.map(
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
          {selectedGarnish.map(
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
        <button
          className={styles.testButton}
          onClick={() => router.push('./my-tteokguk-make')}
        >
          테스트 보내기
        </button>
      </div>
    </div>
  );
}
