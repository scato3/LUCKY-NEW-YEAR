'use client';

import { useState } from 'react';
import styles from './main.module.scss';
import Image from 'next/image';
import { IconLongCloud, IconSun, IconEdge } from '../../../../public/icons';
import { FullTteokguk } from '../../../../public/tteokguk';
import { useRouter } from 'next/navigation';

interface MainContainerProps {
  type: 'main' | 'make' | 'friend' | 'friend-make';
  uuid?: string;
}

export default function MainContainer({ type, uuid }: MainContainerProps) {
  const router = useRouter();
  const [name, setName] = useState('');

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value.length <= 6) {
      setName(value);
    }
  };

  const handleSubmit = () => {
    if (!name) return;

    const params = new URLSearchParams({ name });
    if (type === 'friend-make' && uuid) {
      router.push(`/v/${uuid}/friend-tteokguk-make?${params.toString()}`);
    } else {
      router.push(`/my-tteokguk-make?${params.toString()}`);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <Image
          src={IconLongCloud}
          alt="구름 아이콘"
          className={styles.cloudIcon}
        />
        <Image src={IconSun} alt="태양 아이콘" className={styles.sunIcon} />
        <Image
          src={IconLongCloud}
          alt="구름 아이콘"
          className={styles.cloudSecondIcon}
        />
        <div className={styles.titleContainer}>
          {(type === 'main' || type === 'friend') && (
            <div className={styles.edgeContainer}>
              <Image
                src={IconEdge}
                alt="모서리 장식"
                className={styles.edgeImage}
              />
            </div>
          )}
          <div className={styles.titleTextContainer}>
            <p className={`${styles.title} heir-font`}>떡국</p>
            <p className={`${styles.subTitle} heir-font`}>우정테스트</p>
            {type === 'main' ? (
              <div className={styles.listContainer}>
                <div className={styles.listItem}>
                  <span className={styles.number}>1</span>
                  나만의 떡국을 만들어서
                </div>
                <div className={styles.listItem}>
                  <span className={styles.number}>2</span>친구에게 공유하고
                </div>
                <div className={styles.listItem}>
                  <span className={styles.number}>3</span>궁합점수 랭킹을
                  확인해요
                </div>
              </div>
            ) : type === 'friend' ? (
              <div className={styles.listContainer}>
                <div className={styles.listItem}>
                  <span className={styles.number}>1</span>
                  친구의 떡국에 내 레시피를 더해서
                </div>
                <div className={styles.listItem}>
                  <span className={styles.number}>2</span>
                  둘만의 떡국을 완성하고
                </div>
                <div className={styles.listItem}>
                  <span className={styles.number}>3</span>
                  우정 궁합을 확인하세요!
                </div>
              </div>
            ) : (
              <>
                <p className={`${styles.nameTitle} heir-font`}>
                  {type === 'make' ? '내 이름은?' : '친구에게 보일 내 이름'}
                </p>
                <input
                  type="text"
                  className={styles.nameInput}
                  placeholder="홍길동"
                  value={name}
                  onChange={handleNameChange}
                  maxLength={6}
                  onKeyPress={handleKeyPress}
                />
              </>
            )}
          </div>
        </div>

        {(type === 'main' || type === 'friend') && (
          <Image
            src={FullTteokguk}
            alt="떡국 이미지"
            className={styles.tteokgukImage}
            width={160}
            height={150}
            quality={100}
            priority
          />
        )}
        <div className={styles.topBackground} />
        <div className={styles.bottomBackground} />
        <div className={`${styles.buttonContainer} ${styles.keyboardSafe}`}>
          {type === 'main' || type === 'friend' ? (
            <>
              <button
                className={styles.TteokgukButton}
                onClick={() => {
                  if (type === 'friend' && uuid) {
                    router.push(`/v/${uuid}/friend-tteokguk`);
                  } else {
                    router.push('./my-tteokguk');
                  }
                }}
              >
                시작하기
              </button>
            </>
          ) : (
            <button
              className={styles.startButton}
              disabled={!name}
              onClick={handleSubmit}
            >
              다음
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
