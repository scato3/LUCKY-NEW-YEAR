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
      /Instagram|FBAN|FBAV|Threads|NAVER|BAND|everytime/i.test(
        navigator.userAgent
      );

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
    } else if (isInAppBrowser) {
      const currentUrl = window.location.href;
      document.body.innerHTML = `
        <div style="
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: white;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          font-family: var(--font-wanju);
          padding: 20px;
          text-align: center;
        ">
          <p style="font-size: 18px; margin-bottom: 20px;">
            원활한 사용을 위해<br/>
            외부 브라우저로 열어주세요
          </p>
          <button 
            onclick="window.open('${currentUrl}', '_blank')"
            style="
              background: #25D366;
              border: none;
              border-radius: 5px;
              padding: 15px 30px;
              font-size: 16px;
              font-family: var(--font-wanju);
              cursor: pointer;
            "
          >
            외부 브라우저로 열기
          </button>
        </div>
      `;
      return;
    }
  }, []);

  return <>{children}</>;
}
