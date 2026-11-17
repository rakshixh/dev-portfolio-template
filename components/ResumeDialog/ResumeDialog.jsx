'use client';

import styles from './ResumeDialog.module.scss';

import { portfolio } from '../../data/portfolio';
import Arrow from '../Arrow/Arrow';

export default function ResumeDialog({ onClose }) {
  return (
    <div
      className={styles.resumeBackdrop}
      role="presentation"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <section
        className={styles.resumeDialog}
        role="dialog"
        aria-modal="true"
        aria-label="Resume preview"
        onKeyDown={(event) => event.key === 'Escape' && onClose()}
        tabIndex={-1}
      >
        <div className={styles.resumeActions}>
          <a href={portfolio.resumePdf} download>
            Download PDF <Arrow diagonal />
          </a>
          <a href={portfolio.resumePdf} target="_blank" rel="noreferrer">
            Open PDF <Arrow diagonal />
          </a>
          <button type="button" onClick={onClose} aria-label="Close resume">
            Close
          </button>
        </div>
        <iframe
          className={styles.resumeFrame}
          src={portfolio.resumePdf}
          title={`${portfolio.name} resume PDF`}
        />
      </section>
    </div>
  );
}
