import { Suspense } from 'react';
import FinishedTteokguk from '@/components/pages/finish-tteokguk/tteokguk-finished';

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <FinishedTteokguk />
    </Suspense>
  );
}
