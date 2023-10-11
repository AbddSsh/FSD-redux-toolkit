type QueryParams = {
  userId?: string | null;
  restaurantId?: string | null;
  userLocation?: {
    latitude?: string | null;
    longitude?: string | null;
  };
  userLanguage?: string | null;
  restaurantLocationId?: string | null;
  orderType?: string | null;
};

export const QueryParams = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const queryParams: QueryParams = {};

  // Добавляем ключи и значения только для существующих параметров запроса
  if (urlParams.has("user_id")) {
    queryParams.userId = urlParams.get("user_id");
  }
  if (urlParams.has("restaurant_id")) {
    queryParams.restaurantId = urlParams.get("restaurant_id");
  }
  if (urlParams.has("latitude") && urlParams.has("longitude")) {
    queryParams.userLocation = {
      latitude: urlParams.get("latitude"),
      longitude: urlParams.get("longitude"),
    };
  }
  if (urlParams.has("user_language")) {
    queryParams.userLanguage = urlParams.get("user_language");
  }
  if (urlParams.has("restaurant_location_id")) {
    queryParams.restaurantLocationId = urlParams.get("restaurant_location_id");
  }
  if (urlParams.has("order_type")) {
    queryParams.orderType = urlParams.get("order_type");
  }

  return queryParams;
};
