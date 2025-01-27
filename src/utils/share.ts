interface ShareOptions {
  title?: string;
  text?: string;
  url: string;
}

export const shareLink = async ({
  title = '떡국 우정테스트',
  text = '나만의 떡국을 만들어서 친구와 우정을 확인해보세요!',
  url,
}: ShareOptions) => {
  const isMobile = /Android|iPhone|iPad|Mobile/i.test(navigator.userAgent);
  const isKakaoTalk = /KAKAOTALK/i.test(navigator.userAgent);
  const isLine = /Line/i.test(navigator.userAgent);
  const isInAppBrowser = isKakaoTalk || isLine;

  if (isMobile && !isInAppBrowser && navigator.share) {
    try {
      await navigator.share({
        title,
        text,
        url,
      });
      return;
    } catch (error) {
      console.error('공유에 실패했습니다', error);
    }
  }

  // 웹 브라우저나 인앱브라우저에서는 클립보드 복사
  try {
    await navigator.clipboard.writeText(url);
    alert('링크가 복사되었습니다');
  } catch {
    // 구형 브라우저를 위한 fallback
    const textarea = document.createElement('textarea');
    textarea.value = url;
    document.body.appendChild(textarea);
    textarea.select();
    try {
      document.execCommand('copy');
      alert('링크가 복사되었습니다');
    } catch (error) {
      console.error('링크 복사에 실패했습니다', error);
    }
    document.body.removeChild(textarea);
  }
};
