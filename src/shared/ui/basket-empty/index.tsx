import { BasketIcon } from "shared/icons/Basket";
import styles from "./styles.module.css";
import { useTranslation } from "react-i18next";

export const BasketEmpty = () => {
  const { t } = useTranslation();
  return (
    <div className={styles.content__wrapper}>
      <div className={styles.basket__icon}>
        <BasketIcon />
      </div>
      <div className={styles.empty__text}>{t("empty_basket")}</div>
    </div>
  );
};
