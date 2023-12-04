import { CategoryItemsList } from "features/lists-info/category-items-list";
import styles from "./styles.module.css";
import { useEffect } from "react";
import { IBasketCard, ICard } from "shared/types";
import { CatalogSkeleton } from "shared/ui/skeletons/catalog-skeleton";
import { Language } from "shared/config/languages-types";
import i18n from "shared/config/i18n";
import { setLanguage } from "shared/config/language";
import {
  addItemToBasket,
  fetchBasket,
  fetchCatalog,
  removeItemFromBasket,
  useAppDispatch,
  useAppSelector,
} from "shared/store";

export const Catalog = () => {
  const dispatch = useAppDispatch();
  const { filteredCatalog, isLoading, error } = useAppSelector(
    (state) => state.catalogReducer
  );
  const { queryParams } = useAppSelector((state) => state.basketReducer);

  const changeLanguage = (language: Language) => {
    i18n.changeLanguage(language);
    setLanguage(language);
  };
  useEffect(() => {
    if (queryParams.userId) {
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
    }
  }, [queryParams]);

  const addToBasket = (card: IBasketCard) => {
    const addToBasketAsync = async () => {
      try {
        await dispatch(
          addItemToBasket({
            userId: queryParams.userId,
            productId: card.product_id,
            count: 1,
            modification: card.modification,
          })
        );

        await dispatch(
          fetchBasket({
            userId: queryParams.userId,
            latitude: queryParams.userLocation?.latitude,
            longitude: queryParams.userLocation?.longitude,
            restaurantLocationId: queryParams.restaurantLocationId,
            orderType: queryParams.orderType,
            language: queryParams.userLanguage,
          })
        );
      } catch (error) {
        console.log("Что-то пошло не так...");
      }
    };
    addToBasketAsync();
  };
  const increaseProductCount = (card: IBasketCard) => {
    const increaseProduct = async () => {
      try {
        await dispatch(
          addItemToBasket({
            userId: queryParams.userId,
            productId: card.product_id,
            count: 1,
            modification: card.modification,
          })
        );

        await dispatch(
          fetchBasket({
            userId: queryParams.userId,
            latitude: queryParams.userLocation?.latitude,
            longitude: queryParams.userLocation?.longitude,
            restaurantLocationId: queryParams.restaurantLocationId,
            orderType: queryParams.orderType,
            language: queryParams.userLanguage,
          })
        );
      } catch (error) {}
    };
    increaseProduct();
  };
  const decreaseProductCount = (card: IBasketCard) => {
    const decreaseProduct = async () => {
      try {
        await dispatch(
          removeItemFromBasket({
            userId: queryParams.userId,
            productId: card.product_id,
            modification: card.modification,
          })
        );
        await dispatch(
          fetchBasket({
            userId: queryParams.userId,
            latitude: queryParams.userLocation?.latitude,
            longitude: queryParams.userLocation?.longitude,
            restaurantLocationId: queryParams.restaurantLocationId,
            orderType: queryParams.orderType,
            language: queryParams.userLanguage,
          })
        );
      } catch (error) {}
    };

    decreaseProduct();
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
