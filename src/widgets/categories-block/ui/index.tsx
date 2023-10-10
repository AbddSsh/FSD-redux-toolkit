import { CategoriesSlider } from "features/sliders/categories-slider";
import styles from "./styles.module.css";
import { useEffect, useState } from "react";
import { observer } from "mobx-react-lite";
import { CategoriesBlockSkeleton } from "shared/ui/skeletons/categories-block-skeleton";
import { useAppSelector } from "shared/store";

export const CategoriesBlock = observer(() => {
  // is block on top
  const [isStickyOnTop, setIsStickyOnTop] = useState(false);
  const isElementOnTop = (element: HTMLElement | null) => {
    if (!element) return false;
    const rect = element.getBoundingClientRect();
    return rect.top <= 0;
  };
  const handleScroll = () => {
    const categoriesblock = document.querySelector<HTMLElement>(
      `.${styles.categoriesblock}`
    );
    if (categoriesblock) {
      const isOnTop = isElementOnTop(categoriesblock);
      setIsStickyOnTop(isOnTop);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // create categories from props
  const { catalog } = useAppSelector((state) => state.catalogReducer);
  const [categories, setCategories] = useState<
    { id: number; category: string }[]
  >([]);
  useEffect(() => {
    const newCategories = catalog.map((cat) => ({
      id: cat?.id,
      category: cat?.category,
    }));
    setCategories(newCategories);
  }, []);

  return (
    <div
      className={
        isStickyOnTop
          ? `${styles.categoriesblock} ${styles.blockintop}`
          : styles.categoriesblock
      }
    >
      {categories.length < 1 ? (
        <CategoriesBlockSkeleton />
      ) : (
        <CategoriesSlider categories={categories} />
      )}
    </div>
  );
});
