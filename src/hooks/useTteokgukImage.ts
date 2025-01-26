import {
  NormalTteokguk,
  DakTteokguk,
  HaemulTteokguk,
  MaraTteokguk,
  MyulchiTteokguk,
  SagolTteokguk,
  TomatoTteokguk,
} from '../../public/tteokguk';

export default function useTteokgukImage(selectedYuksu?: string) {
  const getTteokgukImage = () => {
    switch (selectedYuksu) {
      case 'sagol':
        return SagolTteokguk;
      case 'myulchi':
        return MyulchiTteokguk;
      case 'dak':
        return DakTteokguk;
      case 'haemul':
        return HaemulTteokguk;
      case 'mara':
        return MaraTteokguk;
      case 'tomato':
        return TomatoTteokguk;
      default:
        return NormalTteokguk;
    }
  };

  return getTteokgukImage();
}
