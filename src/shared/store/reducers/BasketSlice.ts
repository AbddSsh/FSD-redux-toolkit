import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IBasketCard, ICard } from "shared/types";
import { fetchBasket, fetchRelated } from "./ActionCreators";

interface BasketItems {
  user_id: number;
  products: IBasketCard[];
  order_type: string;
  shipping_amount: number;
  amount: number;
  total_amount: number;
}

interface QueryParams {
  userId?: string | null;
  restaurantId?: string | null;
  userLocation?: {
    latitude?: string | null;
    longitude?: string | null;
  };
  userLanguage?: string | null;
  restaurantLocationId?: string | null;
  orderType?: string | null;
}

interface RelatedItem {
  id: number;
  category: string;
  products: ICard[];
}

interface BasketState {
  basket: BasketItems;
  queryParams: QueryParams;
  related: RelatedItem;
  isLoading: boolean;
  error: string;
}

const initialState: BasketState = {
  basket: {
    user_id: 0,
    products: [],
    order_type: "",
    shipping_amount: 0,
    amount: 0,
    total_amount: 0,
  },
  related: { id: 0, category: "", products: [] },
  queryParams: {},
  isLoading: false,
  error: "",
};

export const basketSlice = createSlice({
  name: "Basket",
  initialState,
  reducers: {
    setQueryParams(state, action: PayloadAction<QueryParams>) {
      state.queryParams = action.payload;
    },
  },
  extraReducers: {
    [fetchBasket.pending.type]: (state) => {
      state.isLoading = true;
    },
    [fetchBasket.fulfilled.type]: (
      state,
      action: PayloadAction<BasketItems>
    ) => {
      state.isLoading = false;
      state.error = "";
      state.basket = action.payload;
    },
    [fetchBasket.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [fetchRelated.pending.type]: (state) => {
      state.isLoading = true;
    },
    [fetchRelated.fulfilled.type]: (
      state,
      action: PayloadAction<RelatedItem>
    ) => {
      state.isLoading = false;
      state.error = "";
      state.related = action.payload;
    },
    [fetchRelated.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default basketSlice.reducer;
