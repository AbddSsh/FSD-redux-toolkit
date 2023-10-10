import { AdvItem } from "entities/adv-item";
import { Pagination, Scrollbar, A11y } from "swiper/modules";
import styles from "./styles.module.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { FC } from "react";
import { IBasketCard, ICard } from "shared/types";
import { RelatedPageCard } from "entities/related-card";
import { useMediaQuery } from "react-responsive";
import ScrollTriggeredHorisontal from "shared/motion/scroll-triggered-horizontal/scrollTriggeredHorizontal";
import { useTranslation } from "react-i18next";

interface RelatedSliderProps {
  relatedCards: ICard[];
  AddToBasket: (card: IBasketCard) => void;
  increaseProductCount: (card: IBasketCard) => void;
  decreaseProductCount: (card: IBasketCard) => void;
}

export const RelatedSlider: FC<RelatedSliderProps> = ({
  relatedCards,
  AddToBasket,
  increaseProductCount,
  decreaseProductCount,
}) => {
  const isMiniMobile = useMediaQuery({ maxWidth: 389 });
  const { t } = useTranslation();
  return (
    <>
      {relatedCards.length > 0 && (
        <div>
          <div className={styles.title}>{t("related")}</div>
          <ScrollTriggeredHorisontal time={1}>
            <Swiper
              modules={[Pagination, Scrollbar, A11y]}
              spaceBetween={15}
              slidesPerView={isMiniMobile ? 2.5 : 3.3}
              className={styles.swiper__wrapper}
            >
              {relatedCards.map((card, index) => (
                <SwiperSlide key={index} className={styles.swiper__slide}>
                  <RelatedPageCard
                    AddToBasket={AddToBasket}
                    increaseProductCount={increaseProductCount}
                    decreaseProductCount={decreaseProductCount}
                    card={card}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </ScrollTriggeredHorisontal>
        </div>
      )}
    </>
  );
};
