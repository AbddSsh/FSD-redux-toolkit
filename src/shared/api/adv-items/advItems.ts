import { $host } from "../base";

export const getAdvItems = async (restaurantId: string | null | undefined) => {
  const { data } = await $host.get(
    `/api/v1/basket/banner?restaurant_id=${restaurantId}`
  );
  return data;
};
