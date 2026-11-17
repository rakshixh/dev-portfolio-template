'use client';

import styles from './SiteHeader.module.scss';

import { portfolio } from '../../data/portfolio';
import Arrow from '../Arrow/Arrow';
import Wordmark from '../Wordmark/Wordmark';

const nav = ['Work', 'About', 'Experience', 'Contact'];

export default function SiteHeader({ menuOpen, setMenuOpen, onResume }) {
  return (
    <header className={styles.header}>
      <Wordmark />
      <nav
        className={`${styles.nav} ${menuOpen ? styles.navOpen : ''}`}
        aria-label="Main navigation"
      >
        {nav.map((item, index) => (
          <a
            key={item}
            style={{ '--i': index }}
            href={`#${item.toLowerCase()}`}
            onClick={() => setMenuOpen(false)}
          >
            {item}
            <Arrow diagonal className={styles.arrow} />
          </a>
        ))}
        <a className={styles.navEmail} href={`mailto:${portfolio.email}`}>
          {portfolio.email}
        </a>
        <div className={styles.mobileActions}>
          <a className={styles.mobileTalk} href="#contact" onClick={() => setMenuOpen(false)}>
            Let’s talk <Arrow diagonal className={styles.arrow} />
          </a>
          <button
            className={styles.mobileResume}
            type="button"
            onClick={() => {
              setMenuOpen(false);
              onResume();
            }}
          >
            Resume <Arrow diagonal className={styles.arrow} />
          </button>
        </div>
      </nav>
      <div className={styles.headerActions}>
        <a className={styles.headerCta} href="#contact">
          Let’s talk <Arrow diagonal className={styles.arrow} />
        </a>
        <button className={styles.headerResume} type="button" onClick={onResume}>
          Resume <Arrow diagonal className={styles.arrow} />
        </button>
      </div>
      <button
        className={`${styles.menuToggle} ${menuOpen ? styles.menuActive : ''}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
        aria-expanded={menuOpen}
      >
        <span />
        <span />
      </button>
    </header>
  );
}
