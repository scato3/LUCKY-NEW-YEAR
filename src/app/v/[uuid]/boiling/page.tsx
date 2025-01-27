import BoilingTteokguk from '@/components/pages/boiling-tteokguk/boiling-tteokguk';

export default async function Page({ params }: { params: { uuid: string } }) {
  return <BoilingTteokguk uuid={params.uuid} />;
}
