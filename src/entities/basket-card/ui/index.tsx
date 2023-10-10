import { observer } from "mobx-react-lite";
import styles from "./styles.module.css";
import { FC } from "react";
import { IBasketCard } from "shared/types";
import { ChangeQuantityBtn } from "shared/ui/change-quantity-btn";
import { PriceContent } from "shared/ui/price-content";
import ButtonMotion from "shared/motion/button-motion/buttonMotion";
import ScrollTriggeredVertical from "shared/motion/scroll-triggered-vertical/scrollTriggeredVertical";

interface BasketCardProps {
  card: IBasketCard;
  decreaseProductCount: (card: IBasketCard) => void;
  increaseProductCount: (card: IBasketCard) => void;
}

export const BasketCard: FC<BasketCardProps> = observer(
  ({ card, increaseProductCount, decreaseProductCount }) => {
    return (
      <ScrollTriggeredVertical time={0.3} delay={0}>
        <div className={styles.card}>
          <div className={styles.card__wrapper}>
            <div className={styles.card__imgwrapper}>
              <img className={styles.card__image} src={card?.photo} alt="alt" />
            </div>
            <div className={styles.card__info}>
              <div className={styles.card__title}>{card?.name}</div>
              {card?.price_name && (
                <div className={styles.card__details}> {card?.price_name}</div>
              )}
              <div className={styles.card__price}>
                <PriceContent price={card?.price * card?.count} />
              </div>
            </div>
            <div className={styles.card__btn}>
              <ButtonMotion>
                <ChangeQuantityBtn
                  increaseProductCount={increaseProductCount}
                  decreaseProductCount={decreaseProductCount}
                  card={card}
                />
              </ButtonMotion>
            </div>
          </div>
        </div>
      </ScrollTriggeredVertical>
    );
  }
);
