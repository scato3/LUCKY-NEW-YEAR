import { useState } from 'react';

type TabType = 'yuksu' | 'main' | 'sub' | 'garnish';

const MAX_SELECTIONS: Record<TabType, number> = {
  yuksu: 1,
  main: 2,
  sub: 2,
  garnish: 3,
};

export default function useIngredientSelection() {
  const [selectedTab, setSelectedTab] = useState<TabType>('yuksu');
  const [selectedYuksu, setSelectedYuksu] = useState<string[]>([]);
  const [selectedMain, setSelectedMain] = useState<string[]>([]);
  const [selectedSub, setSelectedSub] = useState<string[]>([]);
  const [selectedGarnish, setSelectedGarnish] = useState<string[]>([]);

  const getSelectedIds = (tab: TabType) => {
    switch (tab) {
      case 'yuksu':
        return selectedYuksu;
      case 'main':
        return selectedMain;
      case 'sub':
        return selectedSub;
      case 'garnish':
        return selectedGarnish;
      default:
        return [];
    }
  };

  const handleSelect = (id: string) => {
    const maxCount = MAX_SELECTIONS[selectedTab];

    const updateSelection = (prev: string[]) => {
      if (prev.includes(id)) {
        return prev.filter((item) => item !== id);
      }
      return [...prev, id].slice(-maxCount);
    };

    switch (selectedTab) {
      case 'yuksu':
        setSelectedYuksu(updateSelection(selectedYuksu));
        break;
      case 'main':
        setSelectedMain(updateSelection(selectedMain));
        break;
      case 'sub':
        setSelectedSub(updateSelection(selectedSub));
        break;
      case 'garnish':
        setSelectedGarnish(updateSelection(selectedGarnish));
        break;
    }
  };

  const resetSelections = () => {
    setSelectedYuksu([]);
    setSelectedMain([]);
    setSelectedSub([]);
    setSelectedGarnish([]);
  };

  return {
    selectedTab,
    setSelectedTab,
    getSelectedIds,
    handleSelect,
    resetSelections,
    MAX_SELECTIONS,
  };
}
