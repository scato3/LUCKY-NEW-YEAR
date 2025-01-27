import RankingContainer from '@/components/pages/ranking/ranking';

interface PageProps {
  params: Promise<{ uuid: string }>;
}

export default async function Ranking({ params }: PageProps) {
  const { uuid } = await params;
  return <RankingContainer uuid={uuid} />;
}
