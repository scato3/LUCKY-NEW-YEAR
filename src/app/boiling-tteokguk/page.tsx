import BoilingTteokguk from '@/components/pages/boiling-tteokguk/boiling-tteokguk';
import { Suspense } from 'react';

export default function BoilingPage() {
  return (
    <Suspense>
      <BoilingTteokguk />
    </Suspense>
  );
}
