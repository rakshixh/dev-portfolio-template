import styles from './SiteFooter.module.scss';
import { portfolio } from '../../data/portfolio';
import Arrow from '../Arrow/Arrow';
import Wordmark from '../Wordmark/Wordmark';

export default function SiteFooter({ year, onResume }) {
  return (
    <footer className={styles.footer}>
      <Wordmark />
      <div>
        {portfolio.social.map((item) => (
          <a
            key={item.label}
            href={item.href}
            target={item.href.startsWith('http') ? '_blank' : undefined}
            rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
          >
            {item.label} <Arrow diagonal className={styles.arrow} />
          </a>
        ))}
        <button type="button" onClick={onResume}>
          Resume <Arrow diagonal className={styles.arrow} />
        </button>
      </div>
      <span>© {year} · MADE WITH INTENTION</span>
    </footer>
  );
}
