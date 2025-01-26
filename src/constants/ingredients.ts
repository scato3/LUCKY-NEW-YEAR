import {
  YuksuDak,
  YuksuHaemul,
  YuksuMara,
  YuksuMyulchi,
  YuksuSagol,
  YuksuTomato,
} from '../../public/yuksu';

import {
  MainGarae,
  MainGogi,
  MainGulrim,
  MainJoraeng,
  MainKimchi,
  MainTongGarae,
  MainGguldduk,
} from '../../public/main';

import {
  SubDak,
  SubGgoji,
  SubGul,
  SubHuru,
  SubMiyeok,
  SubSaewoo,
  SubSogogi,
} from '../../public/sub';

import { GarnishGim, GarnishGyeran, GarnishPa } from '../../public/garnish';

export const YUKSU = [
  {
    id: 'sagol',
    name: '사골육수',
    image: YuksuSagol,
  },
  {
    id: 'myulchi',
    name: '멸치육수',
    image: YuksuMyulchi,
  },
  {
    id: 'dak',
    name: '닭육수',
    image: YuksuDak,
  },
  {
    id: 'haemul',
    name: '해물육수',
    image: YuksuHaemul,
  },
  {
    id: 'mara',
    name: '마라육수',
    image: YuksuMara,
  },
  {
    id: 'tomato',
    name: '토마토육수',
    image: YuksuTomato,
  },
] as const;

export const MAIN = [
  {
    id: 'garae',
    name: '가래떡',
    image: MainGarae,
  },
  {
    id: 'tonggarae',
    name: '통가래떡',
    image: MainTongGarae,
  },
  {
    id: 'joraeng',
    name: '조랭이떡',
    image: MainJoraeng,
  },
  {
    id: 'gguldduk',
    name: '귤떡',
    image: MainGguldduk,
  },
  {
    id: 'kimchi',
    name: '김치만두',
    image: MainKimchi,
  },
  {
    id: 'gogi',
    name: '고기만두',
    image: MainGogi,
  },
  {
    id: 'gulrim',
    name: '굴림만두',
    image: MainGulrim,
  },
] as const;

export const SUB = [
  {
    id: 'gul',
    name: '굴',
    image: SubGul,
  },
  {
    id: 'miyeok',
    name: '미역',
    image: SubMiyeok,
  },
  {
    id: 'sogogi',
    name: '소고기',
    image: SubSogogi,
  },
  {
    id: 'dak',
    name: '닭고기',
    image: SubDak,
  },
  {
    id: 'saewoo',
    name: '새우',
    image: SubSaewoo,
  },
  {
    id: 'ggoji',
    name: '꼬지',
    image: SubGgoji,
  },
  {
    id: 'huru',
    name: '탕후루',
    image: SubHuru,
  },
] as const;

export const GARNISH = [
  {
    id: 'gyeran',
    name: '계란',
    image: GarnishGyeran,
  },
  {
    id: 'pa',
    name: '파',
    image: GarnishPa,
  },
  {
    id: 'gim',
    name: '김',
    image: GarnishGim,
  },
] as const;
