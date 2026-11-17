import styles from './ProjectCard.module.scss';
import { colorSystem } from '../../data/colors';
import Arrow from '../Arrow/Arrow';

export default function ProjectCard({ project, number, badgeLabel }) {
  const palette = colorSystem.projectCovers[project.colorKey] || colorSystem.projectCovers.default;
  const projectUrl = project.url || '#contact';
  const externalProject = /^https?:\/\//i.test(projectUrl);
  const monogram = project.title
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((word) => word[0])
    .join('')
    .toUpperCase();

  return (
    <article className={styles.projectCard}>
      <div
        className={`${styles.projectArt} ${styles[palette.shape] || ''} ${project.image ? styles.hasImage : ''}`}
        style={{
          '--project-start': palette.start,
          '--project-middle': palette.middle,
          '--project-end': palette.end,
          '--project-mark': palette.mark,
          '--project-mark-ink': palette.markText,
          '--project-shape-accent': palette.shapeAccent,
        }}
      >
        <span className={styles.artIndex}>
          {number} / {badgeLabel}
        </span>
        {project.image ? (
          <img
            className={styles.projectImage}
            src={project.image}
            alt={project.imageAlt || `${project.title} project preview`}
            loading="lazy"
            decoding="async"
          />
        ) : (
          <>
            <div className={styles.artShape}>
              <span>{monogram}</span>
            </div>
            <span className={styles.artWord}>{project.title.split(' ')[0]}</span>
            <span className={styles.artOrbit} />
          </>
        )}
      </div>
      <div className={styles.projectMeta}>
        <div>
          <span className={styles.eyebrow}>{project.category}</span>
          <h3>{project.title}</h3>
        </div>
        <a
          className={styles.projectLink}
          href={projectUrl}
          aria-label={project.url ? `Visit ${project.title} project` : `Ask about ${project.title}`}
          target={externalProject ? '_blank' : undefined}
          rel={externalProject ? 'noreferrer' : undefined}
        >
          <Arrow diagonal />
        </a>
      </div>
      <p className={styles.projectDescription}>{project.description}</p>
      <div className={styles.tagRow}>
        {project.tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </div>
    </article>
  );
}
