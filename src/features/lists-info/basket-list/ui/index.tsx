import { BasketCard } from "entities/basket-card";
import styles from "./styles.module.css";
import { FC } from "react";
import { IBasketCard, ICard } from "shared/types";
import { RelatedSlider } from "features/sliders/related-slider";
import { useTranslation } from "react-i18next";

interface BasketListProps {
  cards: IBasketCard[];
  relatedCards: ICard[];
  AddToBasket: (card: IBasketCard) => void;
  decreaseProductCount: (card: IBasketCard) => void;
  increaseProductCount: (card: IBasketCard) => void;
}

export const BasketList: FC<BasketListProps> = ({
  cards,
  relatedCards,
  AddToBasket,
  decreaseProductCount,
  increaseProductCount,
}) => {
  const { t } = useTranslation();
  return (
    <div className={styles.basketlist}>
      <div className={styles.basketlist__title}>{t("in_your_basket")}</div>
      <div className={styles.basketlist__wrapper}>
        <div className={styles.basketlist__items}>
          {cards.map((card, index) => (
            <BasketCard
              key={index}
              card={card}
              increaseProductCount={increaseProductCount}
              decreaseProductCount={decreaseProductCount}
            />
          ))}
        </div>
        <div className={styles.related__slider}>
          <RelatedSlider
            relatedCards={relatedCards}
            decreaseProductCount={decreaseProductCount}
            increaseProductCount={increaseProductCount}
            AddToBasket={AddToBasket}
          />
        </div>
      </div>
    </div>
  );
};
