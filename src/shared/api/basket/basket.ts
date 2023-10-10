import { $host } from "../base";

export const getBasket = async (
  userId: string | null | undefined,
  latitude: string | null | undefined,
  longitude: string | null | undefined,
  restaurantLocationId: string | null | undefined,
  orderType: string | null | undefined,
  language: string | null | undefined
) => {
  const { data } = await $host.post(`/api/v1/basket/current`, {
    user_id: userId,
    user_location: {
      latitude: latitude,
      longitude: longitude,
    },
    restaurant_location_id: restaurantLocationId,
    order_type: orderType,
    language: language,
  });
  return data;
};

export const removeItem = async (
  userId: string | null | undefined,
  productId: number,
  modification: number | null | undefined
) => {
  try {
    const { data } = await $host.post(`/api/v1/basket/remove`, {
      user_id: userId,
      product_id: productId,
      modification: modification,
    });
    return data;
  } catch (error: any) {
    console.log(error.message);
  }
};

export const addItem = async (
  userId: string | null | undefined,
  productId: number,
  count: number,
  modification: number | null | undefined
) => {
  try {
    const { data } = await $host.post(`/api/v1/basket/add`, {
      user_id: userId,
      product_id: productId,
      count: count,
      modification: modification,
    });
    return data;
  } catch (error: any) {
    console.log(error.message);
  }
};
