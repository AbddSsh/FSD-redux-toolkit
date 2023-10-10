import { PriceContent } from "shared/ui/price-content";
import styles from "./styles.module.css";
import { CreateOrder } from "features/actions/create-order";
import { FC } from "react";
import { CreateOrderBtn } from "shared/ui/create-order";
import ButtonMotion from "shared/motion/button-motion/buttonMotion";
import { useTranslation } from "react-i18next";

interface BasketInfoProps {
  shippingAmount: number;
  totalAmount: number;
  amount: number;
}

export const BasketInfo: FC<BasketInfoProps> = ({
  shippingAmount,
  totalAmount,
  amount,
}) => {
  const { t } = useTranslation();
  return (
    <div className={styles.basketinfo}>
      <div className={styles.basketinfo__wrapper}>
        <div className={styles.basketinfo__info}>
          <div className={styles.basketinfo__details}>
            <div className={styles.basketinfo__deliveryprice}>
              Доставка: {<PriceContent price={shippingAmount} />}
            </div>
            <div className={styles.basketinfo__basketprice}>
              {t("basket")} {<PriceContent price={amount} />}
            </div>
          </div>
          <div className={styles.basketinfo__total}>
            {t("total")} {<PriceContent price={totalAmount} />}
          </div>
        </div>
        <ButtonMotion>
          <div className={styles.basketinfo__btn}>
            <CreateOrderBtn onClick={CreateOrder} text={t("create_order")} />
          </div>
        </ButtonMotion>
      </div>
    </div>
  );
};
