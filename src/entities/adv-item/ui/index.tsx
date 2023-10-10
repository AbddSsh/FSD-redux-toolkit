import { FC } from "react";
import styles from "./styles.module.css";

interface AdvItemProps {
  advItem: string;
}

export const AdvItem: FC<AdvItemProps> = ({ advItem }) => {
  return (
    <div className={styles.imgwrapper}>
      <img className={styles.image} src={advItem} alt={"alt"} />
    </div>
  );
};
