import MakeTteokguk from '@/components/pages/make-tteokguk/make-tteokguk';

interface PageProps {
  params: Promise<{ uuid: string }>;
}

export default async function Page({ params }: PageProps) {
  const { uuid } = await params;
  return <MakeTteokguk uuid={uuid} />;
}
