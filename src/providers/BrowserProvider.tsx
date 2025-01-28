'use client';

import { useEffect } from 'react';

export default function BrowserProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    // 일반적인 모바일 브라우저 User Agent 문자열
    const isMobile = /Android|iPhone|iPad|Mobile/i.test(navigator.userAgent);

    // 주요 인앱 브라우저 감지
    const isKakaoTalk = /KAKAOTALK/i.test(navigator.userAgent);
    const isLine = /Line/i.test(navigator.userAgent);
    const isInstagram = /Instagram/i.test(navigator.userAgent);
    const isFacebook = /FBAN|FBAV|FB_IAB|FBIOS/i.test(navigator.userAgent);
    const isThread = /Threads|Instagram|FBAN|FBAV/i.test(navigator.userAgent);
    const isNaver = /NAVER/i.test(navigator.userAgent);
    const isBand = /BAND/i.test(navigator.userAgent);
    const isEverytime = /everytime/i.test(navigator.userAgent);
    const isWeverse = /weverse/i.test(navigator.userAgent);
    const isTwitter = /Twitter/i.test(navigator.userAgent);
    const isPinterest = /Pinterest/i.test(navigator.userAgent);
    const isWeibo = /Weibo/i.test(navigator.userAgent);

    const isInAppBrowser =
      isKakaoTalk ||
      isLine ||
      isInstagram ||
      isFacebook ||
      isThread ||
      isNaver ||
      isBand ||
      isEverytime ||
      isWeverse ||
      isTwitter ||
      isPinterest ||
      isWeibo;

    if (isMobile && isInAppBrowser) {
      const currentUrl = window.location.href;

      // 각 앱별 외부 브라우저 열기 처리
      if (isKakaoTalk) {
        window.location.href = `kakaotalk://web/openExternal?url=${encodeURIComponent(currentUrl)}`;
      } else if (isLine) {
        window.location.href = `line://app/openExternalBrowser?url=${encodeURIComponent(currentUrl)}`;
      } else if (
        isInstagram ||
        isFacebook ||
        isThread ||
        isNaver ||
        isBand ||
        isEverytime ||
        isWeverse ||
        isTwitter ||
        isPinterest ||
        isWeibo
      ) {
        // 다른 앱들은 일반 브라우저로 리다이렉트
        window.location.href = currentUrl;
        // 백업 방법으로 window.open 시도
        window.open(currentUrl, '_system');
        // 또는 target="_blank"로 시도
        window.open(currentUrl, '_blank');
      }

      // 인앱브라우저에서 페이지 렌더링 방지
      document.body.innerHTML = '';
      return;
    }
  }, []);

  return <>{children}</>;
}
