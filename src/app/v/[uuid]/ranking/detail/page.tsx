import DetailClient from '@/components/pages/detail/detail';
import { Suspense } from 'react';

interface PageProps {
  params: Promise<{ uuid: string }>;
  searchParams: Promise<{
    uuid: string;
  }>;
}

export default async function DetailPage({ params, searchParams }: PageProps) {
  const { uuid } = await params;
  const { uuid: searchUuid } = await searchParams;

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <DetailClient ownerUUID={uuid} findUUID={searchUuid} />
    </Suspense>
  );
}
