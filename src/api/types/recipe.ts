export interface TestData {
  nickname: string;
  yuksu: string[];
  main: string[];
  sub: string[];
  garnish: string[];
}

export interface PutData extends TestData {
  message: string;
}

interface RankItem {
  nickname: string;
  score: number;
}

export interface PutRecipeResponse {
  shareUrl: string;
  myScore: number;
  myRank: number;
  content: string;
  ownerUUID: string;
  topRankList: RankItem[];
  title: string;
}

export interface RecipeResponse {
  userUUID: string;
}

export interface RankingParameterProps {
  userUUID: string;
  page: number;
  size: number;
}

interface RankingItem {
  userUUID: string;
  nickname: string;
  score: number;
}

export interface RankingResponse {
  rankList: RankingItem[];
  page: number;
  size: number;
  totalPages: number;
}

export interface GetRankingParameterProps {
  ownerUUID: string;
  findUUID: string;
}

export interface GetRankingResponse {
  userUUID: string;
  score: number;
  title: string;
  content: string;
  message: string;
  yuksu: string[];
  main: string[];
  sub: string[];
  garnish: string[];
  nickname: string;
  myScore: number;
  ownerUUID: string;
}

export interface GetExistParameterProps {
  ownerUUID: string;
}

export interface GetExistResponse {
  exists: boolean;
}
