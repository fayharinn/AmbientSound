import { FaCoffee } from 'react-icons/fa/index';

import { SpecialButton } from '@/components/special-button';

import styles from './donate.module.css';

export function Donate() {
  return (
    <div className={styles.donate}>
      <div className={styles.iconContainer}>
        <div className={styles.tail} />
        <div className={styles.icon}>
          <FaCoffee />
        </div>
      </div>

      <div className={styles.title}>Support Chill</div>
      <p className={styles.desc}>Help to keep Chill ad-free.</p>
      <SpecialButton
        className={styles.button}
        href="https://buy.stripe.com/bIY3fpb2w0Gdeys3cc"
      >
        Donate Now
      </SpecialButton>
    </div>
  );
}
