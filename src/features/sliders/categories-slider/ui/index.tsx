import styles from "./styles.module.css";
import { FC } from "react";
import { Category } from "entities/category";
import { ICategory } from "shared/types";
import { Link } from "react-scroll";

interface CategoriesSliderProps {
  categories: ICategory[];
}

export const CategoriesSlider: FC<CategoriesSliderProps> = ({ categories }) => {
  return (
    <div className={styles.categories}>
      <div className={styles.categories__wrapper}>
        {categories.map((category) => (
          <Link
            key={category.id}
            to={`${category?.id}`}
            spy={true}
            smooth={true}
            duration={500}
            offset={-85}
            activeClass="active__category"
          >
            <Category category={category} />
          </Link>
        ))}
      </div>
    </div>
  );
};
