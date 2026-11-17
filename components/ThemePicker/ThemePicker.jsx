'use client';

import styles from './ThemePicker.module.scss';

import { colorSystem } from '../../data/colors';

export default function ThemePicker({ themeIndex, setThemeIndex, open, setOpen }) {
  const theme = colorSystem.themes[themeIndex];

  return (
    <div className={styles.themeDock}>
      <button className={styles.themeButton} aria-expanded={open} onClick={() => setOpen(!open)}>
        <span className={styles.swatch} style={{ background: theme.css['--accent'] }} />
        <span>Color mood</span>
        <span className={styles.themeDots}>
          {colorSystem.themes.map((item) => (
            <i key={item.id} style={{ background: item.css['--accent'] }} />
          ))}
        </span>
        <b>{open ? '−' : '+'}</b>
      </button>
      {open && (
        <div className={styles.themePanel} role="group" aria-label="Choose a color theme">
          {colorSystem.themes.map((item, index) => (
            <button
              key={item.id}
              onClick={() => {
                setThemeIndex(index);
                setOpen(false);
              }}
              aria-pressed={themeIndex === index}
            >
              <i style={{ background: item.css['--accent'] }} />
              {item.name}
              {themeIndex === index && <span>✓</span>}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
