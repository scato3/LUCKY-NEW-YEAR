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
