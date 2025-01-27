'use client';

import { useEffect } from 'react';

export default function BrowserProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    const isKakaoTalk = /KAKAOTALK/i.test(navigator.userAgent);
    const isLine = /Line/i.test(navigator.userAgent);

    if (isKakaoTalk || isLine) {
      const currentUrl = window.location.href;
      // 현재 페이지를 외부 브라우저로 대체
      window.location.replace(
        isKakaoTalk
          ? `kakaotalk://web/openExternal?url=${encodeURIComponent(currentUrl)}`
          : `line://app/openExternalBrowser?url=${encodeURIComponent(currentUrl)}`
      );
      // 인앱브라우저에서 페이지 렌더링 방지
      document.body.innerHTML = '';
      return;
    }
  }, []);

  return <>{children}</>;
}
