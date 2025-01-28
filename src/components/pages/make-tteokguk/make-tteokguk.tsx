'use client';

import styles from './make-tteokguk.module.scss';
import { IconLongCloud } from '../../../../public/icons';
import { YUKSU, MAIN, SUB, GARNISH } from '@/constants/ingredients';
import IngredientSelector from '@/components/ingredient-selector/ingredient-selector';
import { useState } from 'react';
import { IconRenew } from '../../../../public/icons';
import useIngredientSelection from '@/hooks/useIngredientSelection';
import useTteokgukImage from '@/hooks/useTteokgukImage';
import {
  MAIN_ITEM_IMAGES,
  SUB_ITEM_IMAGES,
  GARNISH_ITEM_IMAGES,
} from '@/constants/item-images';
import { IconBottomEdge } from '../../../../public/icons';
import { useRouter, useSearchParams } from 'next/navigation';
import { OptimizedImage } from '@/components/common/OptimizedImage';
import { useRecipe } from '@/hooks/useRecipe';
import { usePostRecipeTest } from '@/api/query/recipe';

type TabType = 'yuksu' | 'main' | 'sub' | 'garnish';

const TABS: { id: TabType; label: string }[] = [
  { id: 'yuksu', label: '육수' },
  { id: 'main', label: '주재료' },
  { id: 'sub', label: '부재료' },
  { id: 'garnish', label: '고명' },
];

interface MakeTteokgukProps {
  uuid?: string;
}

export default function MakeTteokguk({ uuid }: MakeTteokgukProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const name = searchParams.get('name') || '';
  const {
    selectedTab,
    setSelectedTab,
    getSelectedIds,
    handleSelect,
    resetSelections,
  } = useIngredientSelection();
  const [showGuide, setShowGuide] = useState(true);
  const tteokgukImage = useTteokgukImage(getSelectedIds('yuksu')[0]);
  const { setRecipe } = useRecipe();

  const { mutate } = usePostRecipeTest();

  const getIngredients = (tab: TabType) => {
    switch (tab) {
      case 'yuksu':
        return YUKSU;
      case 'main':
        return MAIN;
      case 'sub':
        return SUB;
      case 'garnish':
        return GARNISH;
      default:
        return [];
    }
  };

  const renderSelectedItems = () => {
    const selectedMain = getSelectedIds('main');
    const selectedSub = getSelectedIds('sub');
    const selectedGarnish = getSelectedIds('garnish');

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

  const isCompleteEnabled = () => {
    const hasYuksu = getSelectedIds('yuksu').length > 0;
    const hasMain = getSelectedIds('main').length > 0;
    const hasSub = getSelectedIds('sub').length > 0;
    return hasYuksu && hasMain && hasSub;
  };

  const handleComplete = () => {
    const recipe = {
      yuksu: getSelectedIds('yuksu'),
      main: getSelectedIds('main'),
      sub: getSelectedIds('sub'),
      garnish: getSelectedIds('garnish'),
      nickname: name,
    };

    setRecipe(recipe);

    mutate(recipe, {
      onSuccess: (response) => {
        if (uuid) {
          router.push(`/v/${uuid}/boiling?name=${name}`);
        } else {
          router.push(`/finish-tteokguk?uuid=${response.userUUID}`);
        }
      },
      onError: (error) => {
        console.error('Error:', error);
        alert('실패했습니다');
      },
    });
  };

  return (
    <div className={styles.container} onClick={() => setShowGuide(false)}>
      <button
        className={styles.completeButton}
        disabled={!isCompleteEnabled()}
        onClick={handleComplete}
      >
        완성
      </button>
      <OptimizedImage
        src={IconBottomEdge}
        alt="아래 장식"
        className={styles.bottomEdge}
      />
      <OptimizedImage
        src={IconLongCloud}
        alt="구름 아이콘"
        className={styles.cloudIcon}
      />
      <OptimizedImage
        src={IconLongCloud}
        alt="구름 아이콘"
        className={styles.cloudSecondIcon}
      />
      <div className={styles.tteokgukContainer}>
        <OptimizedImage
          src={tteokgukImage}
          alt="떡국"
          width={238}
          height={183}
          className={styles.tteokgukImage}
        />
        {renderSelectedItems()}
      </div>

      <div className={styles.slideUpPanel}>
        <div className={styles.content}>
          <div className={styles.tabContainer}>
            {TABS.map((tab) => (
              <button
                key={tab.id}
                className={`${styles.tabButton} ${selectedTab === tab.id ? styles.selected : ''}`}
                onClick={() => setSelectedTab(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>
          <IngredientSelector
            ingredients={getIngredients(selectedTab)}
            selectedIds={getSelectedIds(selectedTab)}
            onSelect={handleSelect}
            type={selectedTab}
          />
        </div>
      </div>

      <div className={styles.resetButton} onClick={resetSelections}>
        <OptimizedImage src={IconRenew} alt="초기화" width={24} height={24} />
      </div>

      {showGuide && (
        <div className={styles.guideOverlay}>
          <div className={styles.guideBox}>
            <div className={styles.guideContent}>
              <p>육수를 선택하고,</p>
              <p>원하는 재료를 넣어서</p>
              <p>떡국을 완성하자!</p>
            </div>
            <div className={styles.guideLine} />
          </div>
          <div className={styles.resetGuide}>
            <p>초기화할 수 있어!</p>
          </div>
        </div>
      )}
    </div>
  );
}
