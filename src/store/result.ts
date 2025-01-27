import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { PutRecipeResponse } from '@/api/types/recipe';

interface ResultStore {
  result: PutRecipeResponse | null;
  setResult: (result: PutRecipeResponse) => void;
}

export const useResultStore = create<ResultStore>()(
  persist(
    (set) => ({
      result: null,
      setResult: (result) => set({ result }),
    }),
    {
      name: 'result-storage',
    }
  )
);
