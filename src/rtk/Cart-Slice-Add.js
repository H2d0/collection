import { createSlice } from "@reduxjs/toolkit";


export const cartSliceAdd = createSlice({ 
  initialState: 1,
  name: "cartSliceAdd",
    reducers: {
        addOne: (state, action) => {
          return  state += action.payload
      },
        RemoveOne: (state, action) => {
         return   state -= action.payload
      }
  },
});
export const { addOne, RemoveOne } = cartSliceAdd.actions;
export default cartSliceAdd.reducer;
