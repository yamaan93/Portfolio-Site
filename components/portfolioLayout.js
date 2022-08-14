import styles from './portfolioLayout.module.css';

export default function portfolioLayout({ children }) {
  return <div className={styles.container}>{children}</div>;
}
