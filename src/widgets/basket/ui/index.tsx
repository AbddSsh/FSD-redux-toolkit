import { FC, useEffect, useState } from "react";
import styles from "./styles.module.css";
import { Arrow } from "shared/icons/Arrow";
import { BasketInfo } from "features/lists-info/basket-info";
import { BasketEmpty } from "shared/ui/basket-empty";
import { BasketList } from "features/lists-info/basket-list";
import { ShowBasketBtn } from "features/actions/go-to-basket";
import { IBasketCard } from "shared/types";
import ButtonMotion from "shared/motion/button-motion/buttonMotion";
import Modal from "@mui/material/Modal";
import { useTranslation } from "react-i18next";
import { QueryParams } from "features/query-params";
import {
  basketSlice,
  fetchBasket,
  fetchRelated,
  useAppDispatch,
  useAppSelector,
} from "shared/store";

export const Basket: FC = () => {
  const { t } = useTranslation();
  const [showBasket, setShowBasket] = useState(false);
  const toggleBasket = () => {
    setShowBasket(!showBasket);
  };

  const dispatch = useAppDispatch();
  const { basket, related, queryParams } = useAppSelector(
    (state) => state.basketReducer
  );

  useEffect(() => {
    const urlParams = QueryParams();
    dispatch(basketSlice.actions.setQueryParams(urlParams));
    dispatch(
      fetchBasket({
        userId: queryParams.userId,
        latitude: queryParams.userLocation?.latitude,
        longitude: queryParams.userLocation?.longitude,
        restaurantLocationId: queryParams.restaurantLocationId,
        orderType: queryParams.orderType,
        language: queryParams.userLanguage,
      })
    );
    dispatch(
      fetchRelated({
        restaurantId: queryParams.restaurantId,
        latitude: queryParams.userLocation?.latitude,
        longitude: queryParams.userLocation?.longitude,
        language: queryParams.userLanguage,
      })
    );
  }, []);

  useEffect(() => {
    if (basket.amount === 0) {
      setShowBasket(false);
    }
  }, [basket.amount]);

  const addToBasket = (card: IBasketCard) => {
    basketSlice.actions.addToBasket(card);
  };
  const increaseProductCount = (card: IBasketCard) => {
    basketSlice.actions.addToBasket(card);
  };
  const decreaseProductCount = (card: IBasketCard) => {
    basketSlice.actions.removeFromBasket(card);
  };

  return (
    <div className={styles.pagebasket}>
      <Modal open={showBasket}>
        <div className={styles.basketmodal}>
          <div onClick={toggleBasket} className={styles.arrow__icon}>
            <ButtonMotion>
              <Arrow />
            </ButtonMotion>
          </div>
          <BasketList
            cards={basket.products}
            increaseProductCount={increaseProductCount}
            decreaseProductCount={decreaseProductCount}
            relatedCards={related.products}
            AddToBasket={addToBasket}
          />
          <BasketInfo
            shippingAmount={basket.shipping_amount}
            amount={basket.amount}
            totalAmount={basket.total_amount}
          />
        </div>
      </Modal>
      <div className={styles.pagebasket__wrapper}>
        <div className={styles.delivery__type}>
          {basket.order_type === "shipping"
            ? t("order_type.shipping")
            : t("order_type.pickup")}
          {basket.shipping_amount} {t("price")}
        </div>
        {!basket.products.length ? (
          <BasketEmpty />
        ) : (
          <ButtonMotion>
            <ShowBasketBtn price={basket.total_amount} onClick={toggleBasket} />
          </ButtonMotion>
        )}
      </div>
    </div>
  );
};

export default Basket;
