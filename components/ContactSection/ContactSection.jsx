import styles from './ContactSection.module.scss';
import { portfolio } from '../../data/portfolio';
import Arrow from '../Arrow/Arrow';
import SectionLabel from '../SectionLabel/SectionLabel';

export default function ContactSection() {
  return (
    <section className={styles.contact} id="contact">
      <SectionLabel number="ONE LAST THING" variant="contact">
        GOOD THINGS START WITH A HELLO
      </SectionLabel>
      <div className={styles.contactBody}>
        <span className={styles.eyebrow}>HAVE A GOOD ONE IN MIND?</span>
        <h2>
          Let’s make
          <br />
          something <span>matter.</span>
        </h2>
        <a className={styles.contactButton} href={`mailto:${portfolio.email}`}>
          Write me a note <Arrow diagonal className={styles.arrow} />
        </a>
        <div className={styles.contactOrbit} aria-hidden="true">
          <span className={styles.orbitMark} />
          <span>
            OPEN TO
            <br />
            WHAT’S NEXT
          </span>
        </div>
      </div>
      <div className={styles.contactFoot}>
        <span>GOOD WORK STARTS WITH A CONVERSATION</span>
        <span>
          {portfolio.location} · {portfolio.timezone}
        </span>
      </div>
    </section>
  );
}
