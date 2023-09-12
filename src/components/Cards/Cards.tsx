import ModelCard from "./ModelCard";
import styles from "./styles.module.css";

const Cards = () => {
  return (
    <section className={styles.cards}>
      {/* intro card */}
      <span className={styles["first-card"]}>
        Check out our most popular courses!
      </span>
      {/* cards */}

      <ModelCard
        icon="icon-animation"
        title="Animation"
        description="Learn the latest animation techniques to create stunning motion design and captivate your audience."
        buttonText="Get Started"
      />
      <ModelCard
        icon="icon-design"
        title="Design"
        description="Create beautiful, usable interfaces to help shape the future of how the web looks."
        buttonText="Get Started"
      />

      <ModelCard
        icon="icon-photography"
        title="Photography"
        description="Explore critical fundamentals like lighting, composition, and focus to capture exceptional photos."
        buttonText="Get Started"
      />

      <ModelCard
        icon="icon-crypto"
        title="Crypto"
        description="All you need to know to get started investing in crypto. Go from beginner to advanced with this 54-hour course."
        buttonText="Get Started"
      />

      <ModelCard
        icon="icon-business"
        title="Business"
        description="A step-by-step playbook to help you start, scale, and sustain your business without outside investment."
        buttonText="Get Started"
      />
    </section>
  );
};

export default Cards;
