import { useCallback } from 'react';
import { useRecipeStore } from '@/store/recipe';

export const useRecipe = () => {
  const store = useRecipeStore();

  const setRecipe = useCallback(
    (recipe: {
      yuksu: string[];
      main: string[];
      sub: string[];
      garnish: string[];
    }) => {
      store.setRecipe(recipe);
    },
    [store]
  );

  return { setRecipe };
};
