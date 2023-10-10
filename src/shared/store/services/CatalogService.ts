import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ICard } from "shared/types";

type FetchParams = {
  id: number;
  category: string;
  products: ICard[];
};

type BodyParams = {
  restaurant_id: string;
  user_location: {
    latitude: string;
    longitude: string;
  };
  language: string;
};

export const catalogAPI = createApi({
  reducerPath: "catalogAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_BASE_URL + "/api/v1/basket/",
  }),
  endpoints: (build) => ({
    fetchCatalog: build.mutation<FetchParams[], BodyParams>({
      query: (BodyParams) => ({
        url: "/products",
        method: "POST",
        body: BodyParams,
      }),
    }),
  }),
});
