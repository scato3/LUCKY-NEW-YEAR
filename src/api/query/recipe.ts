import { api } from '../instance';
import { useMutation, useQuery } from '@tanstack/react-query';
import {
  TestData,
  PutData,
  RecipeResponse,
  RankingParameterProps,
  RankingResponse,
  GetRankingParameterProps,
  GetRankingResponse,
  GetExistParameterProps,
  GetExistResponse,
} from '../types/recipe';

async function postRecipeTest(data: TestData): Promise<RecipeResponse> {
  return await api.post<RecipeResponse>({
    url: 'recipe/test',
    body: data,
  });
}

export const usePostRecipeTest = () => {
  return useMutation<RecipeResponse, Error, TestData>({
    mutationFn: postRecipeTest,
  });
};

async function putRecipeTest(
  data: PutData,
  ownerUUID: string
): Promise<GetRankingResponse> {
  return await api.put<GetRankingResponse>({
    url: `recipe/test/${ownerUUID}`,
    body: data,
  });
}

export const usePutRecipeTest = () => {
  return useMutation<
    GetRankingResponse,
    Error,
    { data: PutData; ownerUUID: string }
  >({
    mutationFn: ({ data, ownerUUID }) => putRecipeTest(data, ownerUUID),
  });
};

async function getRanking(
  data: RankingParameterProps
): Promise<RankingResponse> {
  return await api.get<RankingResponse>({
    url: `recipe/test/${data.userUUID}/rank`,
    query: {
      page: data.page,
      size: data.size,
    },
  });
}

export const useGetRanking = (data: RankingParameterProps) => {
  return useQuery<RankingResponse, Error>({
    queryKey: ['ranking', data.userUUID, data.page, data.size],
    queryFn: () => getRanking(data),
  });
};

async function getDetailRanking(
  data: GetRankingParameterProps
): Promise<GetRankingResponse> {
  return await api.get<GetRankingResponse>({
    url: `recipe/test/${data.ownerUUID}/detail`,
    query: {
      findUUID: data.findUUID,
    },
  });
}

export const useGetDetailRanking = (data: GetRankingParameterProps) => {
  return useQuery<GetRankingResponse, Error>({
    queryKey: ['detailRanking', data.ownerUUID, data.findUUID],
    queryFn: () => getDetailRanking(data),
  });
};

export async function getExist(
  data: GetExistParameterProps
): Promise<GetExistResponse> {
  return await api.get<GetExistResponse>({
    url: `recipe/test/${data.ownerUUID}/exists`,
  });
}

export const useGetExist = (data: GetExistParameterProps) => {
  return useQuery<GetExistResponse, Error>({
    queryKey: ['exist', data.ownerUUID],
    queryFn: () => getExist(data),
  });
};
