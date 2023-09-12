import { FC } from "react";
import styles from "./styles.module.css";
import { CiMoneyBill } from "react-icons/ci";

CiMoneyBill;
interface ModelCardProps {
  icon: string;
  title: string;
  description: string;
  buttonText: string;
}

const ModelCard: FC<ModelCardProps> = ({
  icon,
  title,
  description,
  buttonText,
}) => {
  return (
    <div className={styles["main-card"]}>
      <div className={styles["main-card__icon"]}>
        <img src={`./assets/${icon}.svg`} alt={title} />
      </div>
      <h3 className={styles["main-card__head"]}>{title}</h3>
      <p className={styles["main-card__description"]}>{description}</p>
      <button className={styles["main-card__btn"]}>{buttonText}</button>
    </div>
  );
};

export default ModelCard;
