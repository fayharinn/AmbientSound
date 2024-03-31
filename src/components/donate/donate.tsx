import { Container } from '@/components/container';

import styles from './donate.module.css';

export function Donate() {
  return (
    <Container>
      <section className={styles.wrapper}>
        <p className={styles.text}>
          Enjoy Chill?{' '}
          <a
            href="https://buy.stripe.com/bIY3fpb2w0Gdeys3cc"
            rel="noreferrer"
            target="_blank"
          >
            Support with a donation!❤️
          </a>
        </p>
      </section>
    </Container>
  );
}
