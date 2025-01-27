import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface RecipeState {
  yuksu: string[];
  main: string[];
  sub: string[];
  garnish: string[];
  setRecipe: (
    recipe: Pick<RecipeState, 'yuksu' | 'main' | 'sub' | 'garnish'>
  ) => void;
  clearRecipe: () => void;
}

export const useRecipeStore = create<RecipeState>()(
  persist(
    (set) => ({
      yuksu: [],
      main: [],
      sub: [],
      garnish: [],
      setRecipe: (recipe) => set(recipe),
      clearRecipe: () => set({ yuksu: [], main: [], sub: [], garnish: [] }),
    }),
    {
      name: 'recipe-storage',
    }
  )
);
