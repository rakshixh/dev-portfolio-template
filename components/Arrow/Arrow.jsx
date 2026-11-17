import styles from './Arrow.module.scss';

export default function Arrow({ diagonal = false, className = '' }) {
  return (
    <svg
      aria-hidden="true"
      className={`${styles.arrow} ${className}`}
      viewBox="0 0 24 24"
      fill="none"
    >
      {diagonal ? (
        <path d="M6 18 18 6M8 6h10v10" stroke="currentColor" strokeWidth="1.6" />
      ) : (
        <path d="M12 4v15m-7-7 7 7 7-7" stroke="currentColor" strokeWidth="1.6" />
      )}
    </svg>
  );
}
