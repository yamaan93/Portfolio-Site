import styles from "./portfolioLayout.module.css";

export default function SubjectCard(props) {
  return (
    <>
      <h1>{props.subject}</h1>
      <div className={styles.cardHolder}>{props.children}</div>
    </>
  );
}
