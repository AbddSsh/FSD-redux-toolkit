import { Minus } from "shared/icons/Minus";
import styles from "./styles.module.css";
import { Plus } from "shared/icons/Plus";
import { FC, useEffect, useState } from "react";
import { IBasketCard } from "shared/types";
import { observer } from "mobx-react-lite";

interface ChangeQuantityBtnProps {
  increaseProductCount: (card: IBasketCard) => void;
  decreaseProductCount: (card: IBasketCard) => void;
  card: IBasketCard;
  handleShowModal?: () => void;
}

export const ChangeQuantityBtn: FC<ChangeQuantityBtnProps> = observer(
  ({ increaseProductCount, decreaseProductCount, card, handleShowModal }) => {
    const [isButtonDisabled, setButtonDisabled] = useState(false);

    const handleButtonClick = (callback: () => void) => {
      if (!isButtonDisabled) {
        setButtonDisabled(true); // Блокируем кнопку
        callback();
      }
    };

    useEffect(() => {
      // После каждой операции разблокируем кнопку через 0мс
      const timeout = setTimeout(() => {
        setButtonDisabled(false);
      }, 0);

      return () => clearTimeout(timeout);
    }, [card]);
    return (
      <div className={styles.btn}>
        <div className={styles.btn__wrapper}>
          <span
            className={styles.icon__wrapper}
            onClick={() => handleButtonClick(() => decreaseProductCount(card))}
          >
            <Minus />
          </span>
          <span className={styles.count}>
            {card.totalCount ? card.totalCount : card.count}
          </span>
          <span
            className={styles.icon__wrapper}
            onClick={() =>
              handleButtonClick(() => {
                if (handleShowModal) {
                  handleShowModal();
                } else {
                  increaseProductCount(card);
                }
              })
            }
          >
            <Plus />
          </span>
        </div>
      </div>
    );
  }
);
