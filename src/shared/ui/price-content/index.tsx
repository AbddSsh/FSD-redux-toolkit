import { FC } from "react";
import styles from "./styles.module.css";
import { useTranslation } from "react-i18next";

interface PriceContentProps {
  price: number;
}

export const PriceContent: FC<PriceContentProps> = ({ price }) => {
  const { t } = useTranslation();
  return (
    <span>
      {price?.toLocaleString("ru-RU")?.replace(/\B(?=(\d{3})+(?!\d))/g, " j")}{" "}
      {t("price")}
    </span>
  );
};
