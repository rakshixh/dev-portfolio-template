import styles from './HeroSection.module.scss';
import { portfolio } from '../../data/portfolio';
import Arrow from '../Arrow/Arrow';

export default function HeroSection() {
  return (
    <section className={styles.hero} id="intro" aria-labelledby="hero-title">
      <div className={styles.heroTop}>
        <span className={styles.availability}>
          <i />
          {portfolio.availability}
        </span>
        <span className={styles.location}>
          {portfolio.location} <Arrow diagonal className={styles.arrow} />
        </span>
      </div>
      <p className={styles.heroKicker}>
        {portfolio.name.toUpperCase()} · A DEVELOPER WITH AN EYE FOR THE IN-BETWEEN
      </p>
      <h1 id="hero-title">
        Good ideas
        <br />
        deserve <span className={styles.heroEmphasis}>good</span>
        <br />
        <span className={styles.heroLast}>
          interfaces<span className={styles.period}>.</span>
        </span>
      </h1>
      <div className={styles.heroBottom}>
        <p>
          {portfolio.intro} <span>{portfolio.bio.split('.')[0]}.</span>
        </p>
        <a href="#work" className={styles.discover}>
          SCROLL TO DISCOVER <Arrow className={styles.arrow} />
        </a>
      </div>
      <div className={styles.heroStamp} aria-hidden="true">
        <span>
          INDEPENDENT
          <br />
          BY DESIGN
        </span>
        <span className={styles.orbitMark} />
      </div>
    </section>
  );
}
