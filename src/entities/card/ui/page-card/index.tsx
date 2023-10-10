import { FC, useEffect, useState } from "react";
import styles from "./styles.module.css";
import { PriceContent } from "shared/ui/price-content";
import { ChangeQuantityBtn } from "shared/ui/change-quantity-btn";
import { IBasketCard, ICard } from "shared/types";
import { AddToBasketBtn } from "shared/ui/add-to-basket-btn";
import { PriceMode } from "shared/ui/product-modification";
import { PageCardModal } from "../page-card-modal";
import ButtonMotion from "shared/motion/button-motion/buttonMotion";
import ScrollTriggeredVertical from "shared/motion/scroll-triggered-vertical/scrollTriggeredVertical";
import { t } from "i18next";
import { useTranslation } from "react-i18next";
import { NotActiveBtn } from "shared/ui/not_active_btn";
import { useAppSelector } from "shared/store/hooks/redux";

interface PageCardProps {
  card: ICard;
  AddToBasket: (card: IBasketCard) => void;
  increaseProductCount: (card: IBasketCard) => void;
  decreaseProductCount: (card: IBasketCard) => void;
}

export const PageCard: FC<PageCardProps> = ({
  card,
  AddToBasket,
  increaseProductCount,
  decreaseProductCount,
}) => {
  const { t } = useTranslation();
  const [showModal, setShowModal] = useState(false);
  const handleShowModal = () => {
    setShowModal(true);
    setSelectedMode(card.price[0]);
  };
  const handleCloseModal = () => {
    setShowModal(false);
  };

  const { basket } = useAppSelector((state) => state.basketReducer);

  // change-modification
  const [selectedMode, setSelectedMode] = useState(card.price[0]);
  const handleOptionChange = (mode: PriceMode) => {
    setSelectedMode(mode);
  };

  useEffect(() => {
    setBasketCard({
      ...BasketCard,
      price: selectedMode.price,
      price_name: card?.mode === "default" ? null : selectedMode?.name,
      modification: card?.mode === "default" ? null : selectedMode?.id,
    });
  }, [selectedMode]);

  const [BasketCard, setBasketCard] = useState({
    product_id: card?.product_id,
    name: card?.name,
    photo: card?.photo,
    count: 0,
    price: selectedMode?.price,
    amount: selectedMode?.price,
    price_name: card?.mode === "default" ? null : selectedMode?.name,
    modification: card?.mode === "default" ? null : selectedMode?.id,
  });

  const [pageCard, setPageCard] = useState<ICard | IBasketCard>(card);

  useEffect(() => {
    if (card.mode === "extend") {
      const productsWithSameId = basket.products.filter(
        (item) => item?.product_id === card?.product_id
      );
      if (productsWithSameId.length > 0) {
        const totalCount = productsWithSameId.reduce(
          (total, product) => total + product?.count,
          0
        );
        const sameIdCard = {
          ...productsWithSameId[0],
          totalCount: totalCount,
        };
        setPageCard(sameIdCard);
      } else {
        setPageCard(card);
      }
    } else {
      const existingCard = basket.products.find(
        (item) => item?.product_id === card?.product_id
      );
      if (existingCard) {
        setPageCard(existingCard);
      } else {
        setPageCard(card);
      }
    }
  }, [basket.amount]);

  return (
    <ScrollTriggeredVertical time={0.5} delay={0}>
      <div className={showModal ? styles.modal__overlay : ""}></div>
      <div className={styles.card}>
        <div className={styles.card__wrapper}>
          <div className={styles.card__info} onClick={handleShowModal}>
            <div className={styles.card__imgwrapper}>
              <img
                className={styles.card__image}
                src={pageCard?.photo}
                alt="alt"
              />
            </div>
            <div className={styles.card__details}>
              <div className={styles.card__title}>{pageCard?.name}</div>
              <div className={styles.card__price}>
                <PriceContent price={card?.price[0]?.price} />
              </div>
            </div>
          </div>
          {card.product_status === "active" ? (
            <ButtonMotion>
              <div className={styles.card__btn}>
                {"count" in pageCard ? (
                  <div className={styles.pagecard__counter}>
                    <ChangeQuantityBtn
                      increaseProductCount={increaseProductCount}
                      decreaseProductCount={decreaseProductCount}
                      card={pageCard}
                      handleShowModal={
                        card?.mode === "extend" ? handleShowModal : undefined
                      }
                    />
                  </div>
                ) : (
                  <AddToBasketBtn
                    onClick={() => {
                      if (card.mode === "default") {
                        AddToBasket(BasketCard);
                      } else {
                        handleShowModal();
                      }
                    }}
                    text={t("add_to_basket")}
                    card={BasketCard}
                    fontsize={"18px"}
                  />
                )}
              </div>
            </ButtonMotion>
          ) : (
            <div className={styles.card__btn}>
              <NotActiveBtn text={t("not_active")} fontsize={"12px"} />
            </div>
          )}
        </div>
        <PageCardModal
          BasketCard={BasketCard}
          card={card}
          AddToBasket={AddToBasket}
          closeModal={handleCloseModal}
          handleOptionChange={handleOptionChange}
          selectedMode={selectedMode}
          showModal={showModal}
        />
      </div>
    </ScrollTriggeredVertical>
  );
};
