import MainContainer from '@/components/pages/main/main-container';

interface PageProps {
  params: Promise<{ uuid: string }>;
}

export default async function Page({ params }: PageProps) {
  const { uuid } = await params;
  return <MainContainer type="friend" uuid={uuid} />;
}
