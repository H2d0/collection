import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

let url = "https://fakestoreapi.com/products";

export const fetchAllcategories = createAsyncThunk(
  "Allcategories/fetchSlice",
  async () => {
    const res = await fetch(`${url}/categories`);
    const data = await res.json();
    return data;
  }
);

export const Allcategories = createSlice({
  initialState: [],
  name: "Allcategories",
  extraReducers: (builder) => {
    builder.addCase(fetchAllcategories.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});
export default Allcategories.reducer;
