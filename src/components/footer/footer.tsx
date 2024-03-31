import { Container } from '@/components/container';

import styles from './footer.module.css';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <Container>
        <p>
          Chill: Relax & Sleep
        </p>
      </Container>
    </footer>
  );
}
