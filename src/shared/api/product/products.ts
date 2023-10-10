import { $host } from "shared/api/base";

export const getCatalog = async (
  restaurantId: string | null | undefined,
  latitude: string | null | undefined,
  longitude: string | null | undefined,
  language: string | null | undefined
) => {
  const { data } = await $host.post(`/api/v1/basket/products`, {
    restaurant_id: restaurantId,
    user_location: {
      latitude: latitude,
      longitude: longitude,
    },
    language: language,
  });
  return data;
};
