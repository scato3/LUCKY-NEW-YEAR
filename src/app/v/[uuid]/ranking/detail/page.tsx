import DetailClient from '@/components/pages/detail/detail';

interface PageProps {
  params: Promise<{ uuid: string }>;
  searchParams: Promise<{
    uuid: string;
  }>;
}

export default async function DetailPage({ params, searchParams }: PageProps) {
  const { uuid } = await params;
  const { uuid: searchUuid } = await searchParams;

  return <DetailClient ownerUUID={uuid} findUUID={searchUuid} />;
}
