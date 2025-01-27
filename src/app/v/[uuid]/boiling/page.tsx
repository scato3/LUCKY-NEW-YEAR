import BoilingTteokguk from '@/components/pages/boiling-tteokguk/boiling-tteokguk';

interface PageProps {
  params: Promise<{ uuid: string }>;
}

export default async function Page({ params }: PageProps) {
  const { uuid } = await params;
  return <BoilingTteokguk uuid={uuid} />;
}
