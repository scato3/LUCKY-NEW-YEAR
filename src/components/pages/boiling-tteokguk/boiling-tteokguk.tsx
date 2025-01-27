'use client';

import styles from './boiling-tteokguk.module.scss';
import { SotBottom, SotTop, RightCloud } from '../../../../public/sot';
import Image from 'next/image';
import { useState } from 'react';
import { useRecipeStore } from '@/store/recipe';

interface Props {
  uuid: string;
}

export default function BoilingTteokguk({ uuid }: Props) {
  const [message, setMessage] = useState('');
  const { yuksu, main, sub, garnish } = useRecipeStore();

  console.log(yuksu, main, sub, garnish);

  const handleSend = () => {
    // if (message.trim()) {
    //   sendMessage(message, {
    //     onSuccess: () => {
    //       router.push('/friend-tteokguk-make');
    //     },
    //     onError: (error) => {
    //       console.error('Failed to send message:', error);
    //     },
    //   });
    // }
  };

  return (
    <div className={styles.container}>
      <Image
        src={RightCloud}
        alt="왼쪽 구름"
        className={styles.leftCloud}
        width={120}
        height={110}
        priority
      />
      <Image
        src={RightCloud}
        alt="오른쪽 구름"
        className={styles.rightCloud}
        width={160}
        height={130}
        priority
      />
      <div className={styles.textContainer}>
        <h2>떡국을 맛있게 끓이는 동안</h2>
        <h2>친구에게 신년인사를 적어보세요!</h2>
      </div>
      <div className={styles.sotContainer}>
        <Image
          src={SotBottom}
          alt="냄비 바닥"
          className={styles.sotBottom}
          priority
        />
        <Image
          src={SotTop}
          alt="냄비 뚜껑"
          className={styles.sotTop}
          priority
        />
      </div>
      <div className={styles.tableBackground}></div>
      <div className={styles.inputWrapper}>
        <textarea
          className={styles.messageInput}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button
          className={styles.sendButton}
          onClick={handleSend}
          disabled={!message.trim()}
        >
          보내기
        </button>
      </div>
    </div>
  );
}
