import { StaticImageData } from 'next/image';
import {
  ItemGarae,
  ItemTongGarae,
  ItemJoraeng,
  ItemGgulDduk,
  ItemGogi,
  ItemGulim,
  ItemKimchi,
  ItemGul,
  ItemDak,
  ItemSogogi,
  ItemGGoji,
  ItemSaewoo,
  ItemHuru,
  ItemGim,
  ItemGyeran,
  ItemPa,
  ItemMiyeok,
} from '../../public/items';

export const MAIN_ITEM_IMAGES: Record<string, StaticImageData> = {
  garae: ItemGarae,
  tonggarae: ItemTongGarae,
  joraeng: ItemJoraeng,
  gguldduk: ItemGgulDduk,
  gogi: ItemGogi,
  gulrim: ItemGulim,
  kimchi: ItemKimchi,
  miyeok: ItemMiyeok,
};

export const SUB_ITEM_IMAGES: Record<string, StaticImageData> = {
  gul: ItemGul,
  dak: ItemDak,
  sogogi: ItemSogogi,
  ggoji: ItemGGoji,
  saewoo: ItemSaewoo,
  huru: ItemHuru,
  miyeok: ItemMiyeok,
};

export const GARNISH_ITEM_IMAGES: Record<string, StaticImageData> = {
  gyeran: ItemGyeran,
  pa: ItemPa,
  gim: ItemGim,
};
