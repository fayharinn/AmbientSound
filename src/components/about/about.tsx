import { Container } from '@/components/container';
import { count as soundCount } from '@/lib/sounds';

import styles from './about.module.css';

export function About() {
  const count = soundCount();

  const paragraphs = [
    {
      body: 'Feeling like your brain is a squirrel in a traffic jam? Need to turn down the volume of life, or maybe find the perfect backdrop for your cat’s nap? Welcome to Chill, the absolutely free sanctuary of sound! Forget about forking over cash or signing up for more spam – Chill rolls out the red carpet to a universe of "eargasmic" audio adventures, and it’s all on the house.',
      title: 'Free Ear Candy',
    },
    {
      body: `Plunge into our treasure trove of ${count} meticulously hoarded sounds. Nature buffs can bask in the secret gossip of forest streams, ride the coastal wave beats, or get toasty by a crackling campfire. Urban adventurers can soak in the cafe buzz, sync up with the subway symphony, or bathe in the bustling lullabies of city traffic. And for the monks in the making, Chill dials up the zen with binaural beats and color noises, tailor-made to tickle your brainwaves into submission.`,
      title: 'A Sound Buffet',
    },
    {
      body: 'Chill’s genius is in its no-nonsense, mix-and-match playground. Ditch the decision fatigue with our idiot-proof controls – pick your sounds, slide those volumes, and press play. Fancy a concert of crickets serenading the rain? Easy. Stack up those sounds like pancakes to whip up your very own auditory utopia.',
      title: 'DIY Your Zen',
    },
    {
      body: "Whether you're decompressing from a marathon meeting, jazzing up your focus, or seducing yourself into dreamland, Chill’s got your back with the ultimate sound escape. And since it's completely free! You’re free from the tyranny of credit cards and commitments. Slide into Chill today and turn your daily drama into a chillaxing retreat!",
      title: 'Your Go-To Sound Spa',
    },
  ];


  const handleClick = () => {
    const app = document.getElementById('app');

    app?.scrollIntoView();
  };

  return (
    <section className={styles.about}>
      <div className={styles.effect} />

      <Container tight>
        {paragraphs.map((paragraph, index) => (
          <div className={styles.paragraph} key={index}>
            <div className={styles.counter}>
              <span>0{index + 1}</span> / 0{paragraphs.length}
            </div>

            <h2 className={styles.title}>{paragraph.title}</h2>
            <p className={styles.body}>{paragraph.body}</p>
          </div>
        ))}

        <button className={styles.button} onClick={handleClick}>
          Use Chill
        </button>
      </Container>
    </section>
  );
}
