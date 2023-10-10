import { AdvSlider } from "features/sliders/adv-slider";
import styles from "./styles.module.css";
import { useEffect, useState } from "react";
import { getAdvItems } from "shared/api";
import ScrollTriggeredHorisontal from "shared/motion/scroll-triggered-horizontal/scrollTriggeredHorizontal";
import { AdvBlockSkeleton } from "shared/ui/skeletons/advBlock-skeleton";
import { useAppSelector } from "shared/store";

export const AdvBlock = () => {
  const [advItems, setAdvItems] = useState([]);
  const { queryParams } = useAppSelector((state) => state.basketReducer);
  const fetchAdvItems = () => {
    getAdvItems(queryParams.restaurantId).then((data) =>
      setAdvItems(data.banners)
    );
  };

  useEffect(() => {
    setTimeout(() => {
      fetchAdvItems();
    }, 200);
  }, []);

  return (
    <div className={styles.advblock}>
      {!advItems.length ? (
        <AdvBlockSkeleton />
      ) : (
        <ScrollTriggeredHorisontal time={0.3}>
          <AdvSlider advItems={advItems} />
        </ScrollTriggeredHorisontal>
      )}
    </div>
  );
};
