import { FC } from "react";
import { BasketIcon } from "shared/icons/Basket";
import { PriceContent } from "shared/ui/price-content";
import styles from "./styles.module.css";
import { useTranslation } from "react-i18next";

interface ShowBasketBtnProps {
  onClick: () => void;
  price: number;
}

export const ShowBasketBtn: FC<ShowBasketBtnProps> = ({ price, onClick }) => {
  const { t } = useTranslation();
  return (
    <div className={`${styles.btn__wrapper} main-btn`} onClick={onClick}>
      <div className={styles.btn__icon}>
        <BasketIcon />
      </div>
      <div className={styles.btn__text}>{t("to_basket")}</div>
      <div className={styles.btn__price}>
        <PriceContent price={price} />
      </div>
    </div>
  );
};
