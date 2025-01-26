import styles from './boiling-tteokguk.module.scss';
import {
  SotBottom,
  SotTop,
  RightCloud,
  LeftCloud,
} from '../../../../public/sot';
import Image from 'next/image';

export default function BoilingTteokguk() {
  return (
    <div className={styles.container}>
      <Image
        src={LeftCloud}
        alt="왼쪽 구름"
        className={styles.leftCloud}
        priority
      />
      <Image
        src={RightCloud}
        alt="오른쪽 구름"
        className={styles.rightCloud}
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
    </div>
  );
}
