import {  createSlice } from "@reduxjs/toolkit";


export const cartSlice = createSlice({
  initialState: [],
  name: "cartSlice",
  reducers: {
    addProduct: (state, action) => {
      const findProduct = state.find(
        (product) => product.id === action.payload.id
      );
      if (findProduct) {
        findProduct.quantity += 1;
      } else {
        const productClone = { ...action.payload, quantity: 1 };
        return [...state, productClone];
      }
    },
    removeProduct: (state, action) => {
      const findProduct = state.find(
        (product) => product.id === action.payload.id
      );
      if (findProduct) {
        findProduct.quantity -= 1;
        if (findProduct.quantity === 0) {
  console.log(state.splice(state.indexOf(findProduct), 1));
          state.splice(state.indexOf(findProduct), 1);
          
        }
      } else {
        const productClone = { ...action.payload, quantity: 1 };
        return [...state, productClone];
      }
    },
    
  },
});
export const { addProduct, removeProduct, removePage } = cartSlice.actions;
export default cartSlice.reducer;
