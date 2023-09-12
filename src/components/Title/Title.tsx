import styles from "./styles.module.css";
const Title = () => {
  return (
    <section className={styles.title}>
      <div className={styles["title-content"]}>
        <h1 className={styles["title-content__head"]}>
          Maximize skill, minimize budget
        </h1>
        <p className={styles["title-content__sub"]}>
          Our modern courses across a range of in-demand skills will give you
          the knowledge you need to live the life you want.
        </p>
        <button className={styles["title-content__btn"]}>Get Started</button>
      </div>
    </section>
  );
};

export default Title;
