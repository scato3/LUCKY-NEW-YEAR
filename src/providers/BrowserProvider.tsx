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
    const isInAppBrowser =
      /Instagram|FBAN|FBAV|Threads|NAVER|BAND|everytime|Twitter|X App/i.test(
        navigator.userAgent
      );

    if (isKakaoTalk || isLine) {
      const currentUrl = window.location.href;
      window.location.replace(
        isKakaoTalk
          ? `kakaotalk://web/openExternal?url=${encodeURIComponent(currentUrl)}`
          : `line://app/openExternalBrowser?url=${encodeURIComponent(currentUrl)}`
      );
      document.body.innerHTML = '';
      return;
    } else if (isInAppBrowser) {
      document.body.innerHTML = `
        <div style="
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: white;
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 100vh;
          font-family: var(--font-wanju);
          text-align: center;
          box-sizing: border-box;
        ">
          <p style="
            font-size: 18px;
            line-height: 1.5;
            color: #000;
            word-break: keep-all;
            padding: 0 20px;
          ">
            원활한 사용을 위해<br/>
            외부 브라우저로 접속해 주세요
          </p>
        </div>
      `;
      return;
    }
  }, []);

  return <>{children}</>;
}
