import styles from "./percentage.module.css";

export default function Percentage({ itemsCompletos, quantidadeDeItems }) {
  const porcentage = Number((itemsCompletos / quantidadeDeItems) * 100);

  return (
    <section className={styles.Wrapper}>
      <div style={{ width: `${porcentage}%` }}></div>
    </section>
  );
}
