import type { Metadata } from 'next';
import './globals.scss';
import QueryProvider from './queryProvider';
import BrowserProvider from '@/providers/BrowserProvider';

export const metadata: Metadata = {
  title: '떡국 우정테스트',
  description: '나와 친구의 떡국을 조합해서 우정 점수를 확인해보세요',
  openGraph: {
    title: '올해 나와 가장 잘 맞을 친구는?',
    description: '친구와 함께 떡국을 조합해서 둘의 우정 궁합을 확인해보세요',
    images: [
      {
        url: '/tteokguk/thumbnail.png',
        width: 1200,
        height: 900,
        alt: '떡국 우정테스트 썸네일',
      },
    ],
    locale: 'ko_KR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '떡국 우정테스트',
    description: '나와 친구의 떡국을 조합해서 우정 점수를 확인해보세요',
    images: ['/tteokguk/thumbnail.png'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>
        <BrowserProvider>
          <QueryProvider>{children}</QueryProvider>
        </BrowserProvider>
      </body>
    </html>
  );
}
