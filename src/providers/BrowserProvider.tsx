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
      if (isKakaoTalk) {
        location.href = `kakaotalk://web/openExternal?url=${encodeURIComponent(currentUrl)}`;
      } else {
        location.href = `line://app/openExternalBrowser?url=${encodeURIComponent(currentUrl)}`;
      }
      return;
    }
  }, []);

  return <>{children}</>;
}
