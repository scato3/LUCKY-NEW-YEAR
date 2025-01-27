import MakeTteokguk from '@/components/pages/make-tteokguk/make-tteokguk';

export default async function Page({ params }: { params: { uuid: string } }) {
  return <MakeTteokguk uuid={params.uuid} />;
}
