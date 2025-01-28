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
      window.location.replace(
        isKakaoTalk
          ? `kakaotalk://web/openExternal?url=${encodeURIComponent(currentUrl)}`
          : `line://app/openExternalBrowser?url=${encodeURIComponent(currentUrl)}`
      );
      document.body.innerHTML = '';
      return;
    } else if (isInAppBrowser) {
      const currentUrl = window.location.href;
      document.body.innerHTML = `
        <div style="
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: white;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          min-height: 100vh;
          font-family: var(--font-wanju);
          padding: 20px;
          text-align: center;
          box-sizing: border-box;
        ">
          <p style="font-size: 18px; margin-bottom: 20px;">
            원활한 사용을 위해<br/>
            외부 브라우저로 열어주세요
          </p>
          <button 
            onclick="
              // 여러 방법을 순차적으로 시도
              try {
                // 1. location.href로 시도
                window.location.href = '${currentUrl}';
                
                // 2. window.open으로 시도
                setTimeout(() => {
                  const newWindow = window.open('${currentUrl}', '_system');
                  if (!newWindow) {
                    // 3. a 태그로 시도
                    const link = document.createElement('a');
                    link.href = '${currentUrl}';
                    link.target = '_blank';
                    link.rel = 'noopener noreferrer';
                    link.click();
                  }
                }, 100);
              } catch(e) {
                // 4. 마지막 시도
                window.open('${currentUrl}', '_blank');
              }
            "
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
