import { FC } from "react";
import styles from "./styles.module.css";
import { Close } from "shared/icons/Close";
import { PriceContent } from "shared/ui/price-content";
import { ProductModification, PriceMode } from "shared/ui/product-modification";
import { IBasketCard, ICard } from "shared/types";
import { AddToBasketBtn } from "shared/ui/add-to-basket-btn";
import Modal from "@mui/material/Modal";
import { useTranslation } from "react-i18next";
import { NotActiveBtn } from "shared/ui/not_active_btn";

interface RelatedCardModalProps {
  BasketCard: IBasketCard;
  card: ICard;
  closeModal: () => void;
  AddToBasket: (card: IBasketCard) => void;
  handleOptionChange?: (mode: PriceMode) => void;
  selectedMode: PriceMode;
  showModal: boolean;
}

export const RelatedCardModal: FC<RelatedCardModalProps> = ({
  BasketCard,
  card,
  closeModal,
  AddToBasket,
  handleOptionChange,
  selectedMode,
  showModal,
}) => {
  const { t } = useTranslation();
  return (
    <Modal open={showModal}>
      <div className={styles.cardmodal}>
        <div className={styles.cardmodal__wrapper}>
          <div className={styles.cardmodal__imgwrapper}>
            <img
              className={styles.cardmodal__image}
              src={card?.photo}
              alt="alt"
            />
            <div
              onClick={() => {
                closeModal();
              }}
              className={styles.hideicon}
            >
              <Close />
            </div>
          </div>
          <div className={styles.cardmodal__info}>
            <div className={styles.cardmodal__title}>{card?.name}</div>
            <div className={styles.cardmodal__description}>
              {card?.description}
            </div>
            <div className={styles.cardmodal__price}>
              <PriceContent price={selectedMode?.price} />
            </div>
          </div>
          <div className={styles.cardmodal__types}>
            {card?.mode === "extend" && (
              <ProductModification
                price={card?.price}
                handleOptionChange={handleOptionChange}
              />
            )}
          </div>
        </div>
        <div className={styles.cardmodal__addblock}>
          <div className={styles.cardmodal__addbtn}>
            {card.product_status === "active" ? (
              <AddToBasketBtn
                onClick={() => {
                  AddToBasket(BasketCard);
                  closeModal();
                }}
                text={t("add_to_basket")}
                card={BasketCard}
                fontsize={"18px"}
              />
            ) : (
              <NotActiveBtn text={t("not_active")} fontsize={"14px"} />
            )}
          </div>
        </div>
      </div>
    </Modal>
  );
};
