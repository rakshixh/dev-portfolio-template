import styles from './ExperienceSection.module.scss';
import { portfolio } from '../../data/portfolio';
import Reveal from '../Reveal/Reveal';
import SectionLabel from '../SectionLabel/SectionLabel';

export default function ExperienceSection() {
  return (
    <section className={styles.experience} id="experience">
      <SectionLabel number="03 — 03">A FEW CHAPTERS SO FAR</SectionLabel>
      <div className={styles.experienceIntro}>
        <h2>
          Good people.
          <br />
          <span>Good problems.</span>
        </h2>
        <p>
          A small timeline of the places, teams, and curious projects that have shaped how I work.
        </p>
      </div>
      <div className={styles.timeline}>
        {portfolio.experience.map((item, index) => (
          <Reveal
            as="article"
            className={styles.timelineRow}
            style={{ '--delay': `${index * 90}ms` }}
            key={item.role}
          >
            <span className={styles.timelineDate}>{item.dates}</span>
            <div className={styles.timelineBody}>
              <div>
                <h3>{item.role}</h3>
                <span>{item.company}</span>
              </div>
              <p>{item.description}</p>
            </div>
            <i className={styles.timelineDot} />
          </Reveal>
        ))}
      </div>
      <Reveal className={styles.toolkit}>
        <div>
          <span className={styles.eyebrow}>MY WORKING TOOLKIT</span>
          <h3>
            Thoughtful by default.
            <br />
            <span>Practical on purpose.</span>
          </h3>
        </div>
        <p>
          From early sketches to the final edge case, I like to stay close to the work. I’m
          comfortable owning a feature end to end and collaborating across disciplines to make it
          better.
        </p>
        <div className={styles.toolkitTags}>
          {['Plan', 'Prototype', 'Build', 'Refine', 'Ship', 'Repeat'].map((item, index) => (
            <span key={item}>
              <i>0{index + 1}</i>
              {item}
            </span>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
