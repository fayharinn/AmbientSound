import { FaGithub } from 'react-icons/fa/index';

import { Container } from '@/components/container';
import { SpecialButton } from '@/components/special-button';

import styles from './source.module.css';

export function Source() {
  return (
    <div className={styles.source}>
      <Container>
        <div className={styles.wrapper}>
          <div className={styles.iconContainer}>
            <div className={styles.tail} />
            <div className={styles.icon}>
              <FaGithub />
            </div>
          </div>

          <h2 className={styles.title}>Chill: Relax & Sleep</h2>
          <p className={styles.desc}>Chill is free and available on iOS!</p>
        </div>
      </Container>
    </div>
  );
}
