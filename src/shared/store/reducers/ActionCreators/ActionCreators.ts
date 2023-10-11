import { addItem, getBasket, getCatalog, removeItem } from "shared/api";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { getRelated } from "shared/api/related";

type FetchParamsCatalog = {
  restaurantId: string | null | undefined;
  latitude: string | null | undefined;
  longitude: string | null | undefined;
  language: string | null | undefined;
};

export const fetchCatalog = createAsyncThunk(
  "catalog/fetchCatalog",
  async (
    { restaurantId, latitude, longitude, language }: FetchParamsCatalog,
    thunkAPI
  ) => {
    try {
      const catalogData = await getCatalog(
        restaurantId,
        latitude,
        longitude,
        language
      );
      return catalogData;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

type FetchParamsBasket = {
  userId: string | null | undefined;
  latitude: string | null | undefined;
  longitude: string | null | undefined;
  restaurantLocationId: string | null | undefined;
  orderType: string | null | undefined;
  language: string | null | undefined;
};

export const fetchBasket = createAsyncThunk(
  "basket/fetchBasket",
  async (
    {
      userId,
      latitude,
      longitude,
      restaurantLocationId,
      orderType,
      language,
    }: FetchParamsBasket,
    thunkAPI
  ) => {
    try {
      const basketData = await getBasket(
        userId,
        latitude,
        longitude,
        restaurantLocationId,
        orderType,
        language
      );
      return basketData;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

type FetchRelatedBasket = {
  restaurantId: string | null | undefined;
  latitude: string | null | undefined;
  longitude: string | null | undefined;
  language: string | null | undefined;
};

export const fetchRelated = createAsyncThunk(
  "basket/fetchRelated",
  async (
    { restaurantId, latitude, longitude, language }: FetchRelatedBasket,
    thunkAPI
  ) => {
    try {
      const relatedData = await getRelated(
        restaurantId,
        latitude,
        longitude,
        language
      );
      return relatedData;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

type addItemBasket = {
  userId: string | null | undefined;
  productId: number;
  count: number;
  modification: number | null | undefined;
};

export const addItemToBasket = createAsyncThunk(
  "basket/addItem",
  async (
    { userId, productId, count, modification }: addItemBasket,
    thunkAPI
  ) => {
    try {
      const response = await addItem(userId, productId, count, modification);
      return response;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

type removeItemBasket = {
  userId: string | null | undefined;
  productId: number;
  modification: number | null | undefined;
};

export const removeItemFromBasket = createAsyncThunk(
  "basket/removeItem",
  async ({ userId, productId, modification }: removeItemBasket, thunkAPI) => {
    try {
      const response = await removeItem(userId, productId, modification);
      return response;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
