import { configureStore } from "@reduxjs/toolkit";
import Allcategories from "../rtk/Categories";
import CartSlice from "./Cart-Slice";


export const store = configureStore({
  reducer: {
    categorie: Allcategories,
    cartpro: CartSlice,
  },
});