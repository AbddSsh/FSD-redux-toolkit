import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICard } from "shared/types";
import { fetchCatalog } from "./ActionCreators";

interface CatalogItem {
  id: number;
  category: string;
  products: ICard[];
}

interface CatalogState {
  catalog: CatalogItem[];
  filteredCatalog: CatalogItem[];
  isLoading: boolean;
  error: string;
  categories: { id: number; category: string }[];
}

const initialState: CatalogState = {
  catalog: [{ id: 0, category: "", products: [] }],
  isLoading: false,
  error: "",
  filteredCatalog: [{ id: 0, category: "", products: [] }],
  categories: [],
};

export const catalogSlice = createSlice({
  name: "Catalog",
  initialState,
  reducers: {
    searchFilter(state, action: PayloadAction<string>) {
      const updatedCatalog = state.catalog.map((category) => ({
        ...category,
        products: category.products.filter((product) =>
          product.name.toLowerCase().includes(action.payload.toLowerCase())
        ),
      }));
      state.filteredCatalog = updatedCatalog;
    },
  },
  extraReducers: {
    [fetchCatalog.pending.type]: (state) => {
      state.isLoading = true;
    },
    [fetchCatalog.fulfilled.type]: (
      state,
      action: PayloadAction<CatalogItem[]>
    ) => {
      state.isLoading = false;
      state.error = "";
      state.catalog = action.payload;
      state.filteredCatalog = action.payload;
      action.payload.map((cat) => [
        ...state.categories,
        { id: cat.id, category: cat.category },
      ]);
    },
    [fetchCatalog.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default catalogSlice.reducer;
