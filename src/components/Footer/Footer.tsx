import styles from "./styles.module.css";
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles["footer-content"]}>
        <h2>skilled</h2>
        <button className={styles["footer-content__btn"]}>Get Started</button>
      </div>
    </footer>
  );
};

export default Footer;
