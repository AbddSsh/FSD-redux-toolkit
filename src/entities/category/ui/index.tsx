import { FC } from "react";
import styles from "./styles.module.css";
import { ICategory } from "shared/types";

interface CategoryProps {
  category: ICategory;
}

export const Category: FC<CategoryProps> = ({ category }) => {
  return <div className={styles.category}>{category?.category}</div>;
};
