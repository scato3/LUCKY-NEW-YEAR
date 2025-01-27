import MakeTteokguk from '@/components/pages/make-tteokguk/make-tteokguk';
import { Suspense } from 'react';

export default function MyTteokguk() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <MakeTteokguk />
    </Suspense>
  );
}
