import styles from "./styles.module.css";

const Hero = () => {
  return (
    <div className={styles["hero-image"]}>
      <div className={styles.line}></div>
      <div className={styles.container}>
        <div className={styles["box-1"]}>
          <span className={styles["box-text"]}>Members</span>
          <p className={styles["box-number"]}>29k</p>
        </div>
        <div className={styles["box-2"]}>
          <span className={styles["box-text"]}>Coursehours</span>
          <p className={styles["box-number"]}>1,451</p>
        </div>
        <img className={styles.mujer} src="./assets/mujer.png" />
      </div>
    </div>
  );
};

export default Hero;
