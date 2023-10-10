import styles from "./styles.module.css";
import { PageCard } from "entities/card/ui";
import { FC } from "react";
import { Element } from "react-scroll";
import { IBasketCard, ICard, ICategory } from "shared/types";

interface CategoryItemsListProps {
  category: ICategory;
  cards: ICard[];
  addToBasket: (card: IBasketCard) => void;
  increaseProductCount: (card: IBasketCard) => void;
  decreaseProductCount: (card: IBasketCard) => void;
}

export const CategoryItemsList: FC<CategoryItemsListProps> = ({
  category,
  cards,
  addToBasket,
  increaseProductCount,
  decreaseProductCount,
}) => {
  return (
    <Element name={`${category?.id}`}>
      <div className={styles.categoryitems}>
        <div className={styles.categoryitems__wrapper}>
          <div className={styles.category__title}>{category.category}</div>
          <div className={styles.categoryitems__cards}>
            {cards.map((card, index) => (
              <PageCard
                key={index}
                card={card}
                AddToBasket={addToBasket}
                increaseProductCount={increaseProductCount}
                decreaseProductCount={decreaseProductCount}
              />
            ))}
          </div>
        </div>
      </div>
    </Element>
  );
};
