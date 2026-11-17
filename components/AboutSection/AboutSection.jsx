import styles from './AboutSection.module.scss';
import { portfolio } from '../../data/portfolio';
import Arrow from '../Arrow/Arrow';
import Reveal from '../Reveal/Reveal';
import SectionLabel from '../SectionLabel/SectionLabel';

export default function AboutSection() {
  const github =
    portfolio.social.find((item) => item.label === 'GitHub')?.href ?? 'https://github.com';

  return (
    <section className={styles.about} id="about">
      <SectionLabel number="02 — 03">THE PERSON BEHIND THE PIXELS</SectionLabel>
      <div className={styles.aboutGrid}>
        <Reveal className={styles.aboutTitle}>
          <span className={styles.eyebrow}>A LITTLE ABOUT ME</span>
          <h2>
            Curious
            <br />
            by nature.
            <br />
            <span>Careful</span>
            <br />
            by craft.
          </h2>
          <span className={`${styles.aboutGlyph} ${styles.orbitMark}`} aria-hidden="true" />
        </Reveal>
        <Reveal className={styles.aboutCopy}>
          <p className={styles.aboutLead}>{portfolio.bio}</p>
          <p>
            I enjoy the space where design meets engineering: asking better questions, simplifying
            the tricky parts, and making the whole thing feel coherent from the first click to the
            last.
          </p>
          <p>
            Outside the browser, you’ll find me collecting small observations, following a side
            project down a rabbit hole, or trying to make the perfect cup of coffee.
          </p>
          <div className={styles.skills}>
            <span className={styles.eyebrow}>THINGS I WORK WITH</span>
            <div>
              {portfolio.skills.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
          </div>
          <a className={styles.textLink} href={github} target="_blank" rel="noreferrer">
            Explore my GitHub <Arrow diagonal className={styles.arrow} />
          </a>
        </Reveal>
      </div>
      <Reveal className={styles.values}>
        <div>
          <span>01</span>
          <h3>Make it clear.</h3>
          <p>Clarity is a kindness. Good software helps people understand what to do next.</p>
        </div>
        <div>
          <span>02</span>
          <h3>Stay curious.</h3>
          <p>The best answer usually starts with a better question and a willingness to learn.</p>
        </div>
        <div>
          <span>03</span>
          <h3>Mind the details.</h3>
          <p>
            The small decisions add up. Care is visible in the things most people never have to
            notice.
          </p>
        </div>
      </Reveal>
    </section>
  );
}
