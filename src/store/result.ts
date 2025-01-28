import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { GetRankingResponse } from '@/api/types/recipe';

interface ResultStore {
  result: GetRankingResponse | null;
  setResult: (result: GetRankingResponse) => void;
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
