import {
  combineReducers,
  configureStore,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";
import catalogReducer from "./reducers/CatalogSlice";
import basketReducer from "./reducers/BasketSlice";
import { catalogAPI } from "./services/CatalogService";

const rootReducer = combineReducers({
  catalogReducer,
  basketReducer,
  [catalogAPI.reducerPath]: catalogAPI.reducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(catalogAPI.middleware),
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
