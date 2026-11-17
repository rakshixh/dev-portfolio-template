import styles from './ProjectsSection.module.scss';
import { portfolio } from '../../data/portfolio';
import ProjectCard from '../ProjectCard/ProjectCard';
import Arrow from '../Arrow/Arrow';
import Reveal from '../Reveal/Reveal';
import SectionLabel from '../SectionLabel/SectionLabel';

export default function ProjectsSection() {
  const projectCount = String(portfolio.projects.length).padStart(2, '0');

  return (
    <section className={styles.work} id="work">
      <SectionLabel number={`01 — ${projectCount}`}>{portfolio.workSection.label}</SectionLabel>
      <Reveal className={styles.workIntro}>
        <h2>
          {portfolio.workSection.headingLead}
          <br />
          <span>{portfolio.workSection.headingAccent}</span>
        </h2>
        <p>{portfolio.workSection.intro}</p>
      </Reveal>
      <div className={styles.projectGrid}>
        {portfolio.projects.map((project, index) => (
          <Reveal
            key={`${project.title}-${index}`}
            className={index === 1 ? styles.projectOffset : ''}
            style={{
              '--delay': `${index * 110}ms`,
              '--reveal-from': index === 1 ? '6.5rem' : '1.5rem',
              '--reveal-to': index === 1 ? '5rem' : '0',
            }}
          >
            <ProjectCard
              project={project}
              number={String(index + 1).padStart(2, '0')}
              badgeLabel={project.badge || portfolio.workSection.projectBadge}
            />
          </Reveal>
        ))}
      </div>
      <Reveal className={styles.projectNote}>
        <span>{portfolio.workSection.note}</span>
        <span>
          {portfolio.workSection.invitation}{' '}
          <a href="#contact">
            {portfolio.workSection.action} <Arrow diagonal className={styles.arrow} />
          </a>
        </span>
      </Reveal>
    </section>
  );
}
