import type { Metadata } from 'next';
import './globals.scss';
import QueryProvider from './queryProvider';
import BrowserProvider from '@/providers/BrowserProvider';

export const metadata: Metadata = {
  title: '떡국 우정테스트',
  description: '나만의 떡국을 만들어서 친구와 우정을 확인해보세요!',
  openGraph: {
    title: '떡국 우정테스트',
    description: '나만의 떡국을 만들어서 친구와 우정을 확인해보세요!',
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
    description: '나만의 떡국을 만들어서 친구와 우정을 확인해보세요!',
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
