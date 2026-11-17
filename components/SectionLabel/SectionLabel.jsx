import styles from './SectionLabel.module.scss';

export default function SectionLabel({ number, children, variant }) {
  return (
    <div className={styles.sectionLabel} data-variant={variant}>
      <span>{number}</span>
      <span>{children}</span>
      <i />
    </div>
  );
}
