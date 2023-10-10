import { AdvItem } from "entities/adv-item";
import { Pagination, Scrollbar, A11y } from "swiper/modules";
import styles from "./styles.module.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { FC } from "react";

interface AdvSliderProps {
  advItems: string[];
}

export const AdvSlider: FC<AdvSliderProps> = ({ advItems }) => {
  return (
    <>
      {advItems.length === 1 ? (
        <AdvItem advItem={advItems[0]} />
      ) : (
        <Swiper
          modules={[Pagination, Scrollbar, A11y]}
          spaceBetween={20}
          slidesPerView={1.2}
        >
          {advItems.map((advItem, index) => (
            <SwiperSlide key={index} className={styles.swiper__slide}>
              <AdvItem advItem={advItem} />
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </>
  );
};
