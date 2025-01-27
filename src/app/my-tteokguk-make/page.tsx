import { Suspense } from 'react';
import MainContainer from '@/components/pages/main/main-container';

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <MainContainer type="make" />
    </Suspense>
  );
}
