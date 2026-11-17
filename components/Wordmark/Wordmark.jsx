import styles from './Wordmark.module.scss';
import { portfolio } from '../../data/portfolio';

export default function Wordmark() {
  return (
    <a className={styles.brand} href="#top" aria-label={`${portfolio.name}, home`}>
      <span className={styles.wordmark}>{portfolio.logo}</span>
    </a>
  );
}
