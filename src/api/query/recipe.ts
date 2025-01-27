import { api } from '../instance';
import { useMutation } from '@tanstack/react-query';
import { TestData, PutData } from '../types/recipe';

async function postRecipeTest(data: TestData): Promise<RecipeResponse> {
  return await api.post<RecipeResponse>({
    url: '/recipe/test',
    body: data,
  });
}

interface RecipeResponse {
  userUUID: string;
  shareUrl: string;
}

export const usePostRecipeTest = () => {
  return useMutation<RecipeResponse, Error, TestData>({
    mutationFn: postRecipeTest,
  });
};

async function putRecipeTest(data: PutData) {
  return await api.put({
    url: '/recipe/test',
    body: data,
  });
}

export const usePutRecipeTest = () => {
  return useMutation({
    mutationFn: putRecipeTest,
  });
};
