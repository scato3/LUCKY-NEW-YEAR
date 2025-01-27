import BoilingTteokguk from '@/components/pages/boiling-tteokguk/boiling-tteokguk';

interface Props {
  params: {
    uuid: string;
  };
}

export default function BoilingPage({ params }: Props) {
  return <BoilingTteokguk uuid={params.uuid} />;
}
