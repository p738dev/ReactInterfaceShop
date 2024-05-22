import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { STATUS } from "../utils/status";
import { BASE_URL } from "../utils/apiURL";
import axios from "axios";

const initialState = {
  searchProducts: [],
  searchProductsStatus: STATUS.IDLE,
};

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getSearchProduct.pending, (state) => {
        state.searchProductsStatus = STATUS.LOADING;
      })
      .addCase(getSearchProduct.fulfilled, (state, action) => {
        state.searchProducts = action.payload;
        state.searchProductsStatus = STATUS.SUCCESS;
      })
      .addCase(getSearchProduct.rejected, (state, action) => {
        state.searchProductsStatus = STATUS.FAILED;
        state.error = action.payload;
      });
  },
});

export const getSearchProduct = createAsyncThunk(
  "product-search/getSearchProduct",
  async (search) => {
    try {
      const response = await axios.get(
        `${BASE_URL}products/search?q=${search}`
      );
      return response.data.products;
    } catch (error) {}
  }
);

export const { setSearch } = searchSlice.actions;
export const allSearchProducts = (state) => state.search.searchProducts;
export const getSearchProductsStatus = (state) =>
  state.search.searchProductsStatus;

export default searchSlice.reducer;
