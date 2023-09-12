import styles from "./styles.module.css";
const Header = () => {
  return (
    <header className={styles.header}>
      <h2 className={styles.logo}>skilled</h2>
      <button className={styles["header-button"]}>Get Started</button>
    </header>
  );
};

export default Header;
