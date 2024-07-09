import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../Component/Product-List/ProductListSlice";

export const store = configureStore({
  reducer: {
    product: productReducer,
  },
});
