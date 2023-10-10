import { CategoryItemsList } from "features/lists-info/category-items-list";
import styles from "./styles.module.css";
import { useEffect } from "react";
import { IBasketCard, ICard } from "shared/types";
import { CatalogSkeleton } from "shared/ui/skeletons/catalog-skeleton";
import { QueryParams } from "features/query-params";
import { Language } from "shared/config/languages-types";
import i18n from "shared/config/i18n";
import { setLanguage } from "shared/config/language";
import {
  basketSlice,
  fetchCatalog,
  useAppDispatch,
  useAppSelector,
} from "shared/store";

export const Catalog = () => {
  const dispatch = useAppDispatch();
  const { filteredCatalog, isLoading, error } = useAppSelector(
    (state) => state.catalogReducer
  );

  const changeLanguage = (language: Language) => {
    i18n.changeLanguage(language);
    setLanguage(language);
  };
  useEffect(() => {
    const queryParams = QueryParams();
    const lang =
      queryParams.userLanguage === "uz" ? Language.Uzbek : Language.Russian;
    changeLanguage(lang);
    dispatch(
      fetchCatalog({
        restaurantId: queryParams.restaurantId,
        latitude: queryParams.userLocation?.latitude,
        longitude: queryParams.userLocation?.longitude,
        language: queryParams.userLanguage,
      })
    );
  }, []);
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
    <>
      {isLoading ? (
        <CatalogSkeleton />
      ) : error ? (
        <p style={{ textAlign: "center" }}>Что-то пошло не так...</p>
      ) : (
        <div className={styles.catalog}>
          <div className={styles.catalog__wrapper}>
            {filteredCatalog &&
              filteredCatalog.map(
                (category: {
                  id: number;
                  category: string;
                  products: ICard[];
                }) => (
                  <CategoryItemsList
                    key={category?.id}
                    category={{
                      id: category?.id,
                      category: category?.category,
                    }}
                    cards={category?.products}
                    addToBasket={addToBasket}
                    increaseProductCount={increaseProductCount}
                    decreaseProductCount={decreaseProductCount}
                  />
                )
              )}
          </div>
        </div>
      )}
    </>
  );
};
