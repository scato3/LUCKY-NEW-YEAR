'use client';

import styles from './finishing.module.scss';
import { IconSun, IconLongCloud } from '../../../../public/icons';
import Image from 'next/image';
import { Ggachi } from '../../../../public/main';

export default function Finishing() {
  return (
    <div className={styles.container}>
      <Image src={IconLongCloud} alt="구름" className={styles.verySmallCloud} />
      <Image src={IconLongCloud} alt="구름" className={styles.bigCloud} />
      <Image src={IconSun} alt="태양" className={styles.sun} />
      <Image src={IconLongCloud} alt="구름" className={styles.smallCloud} />
      <Image src={IconLongCloud} alt="구름" className={styles.middleCloud} />
      <Image src={IconLongCloud} alt="구름" className={styles.bottomCloud} />
      <Image
        src={Ggachi}
        alt="까치"
        className={styles.ggachi}
        priority
        quality={100}
      />
      <div className={styles.textContainer}>
        <p>신년 인사가 담긴 우정 떡국을</p>
        <p>친구에게 보내고 있어요</p>
      </div>
      <div className={styles.topBackground}></div>
      <div className={styles.bottomBackground}></div>
    </div>
  );
}
