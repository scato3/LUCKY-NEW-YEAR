import DetailClient from '@/components/pages/detail/detail';
import { Suspense } from 'react';

interface PageProps {
  params: Promise<{ uuid: string }>;
}

export default async function DetailPage({ params }: PageProps) {
  const { uuid } = await params;

  return (
    <Suspense>
      <DetailClient ownerUUID={uuid} />
    </Suspense>
  );
}
