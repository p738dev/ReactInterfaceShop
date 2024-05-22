import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { STATUS } from "../utils/status";
import { BASE_URL } from "../utils/apiURL";
import axios from "axios";

const initialState = {
  products: [],
  productsStatus: STATUS.IDLE,
  productSingle: [],
  productSingleStatus: STATUS.IDLE,
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state) => {
        state.productsStatus = STATUS.LOADING;
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.products = action.payload;
        state.productsStatus = STATUS.SUCCESS;
      })
      .addCase(getProducts.rejected, (state) => {
        state.productsStatus = STATUS.FAILED;
      })
      .addCase(getProductSingle.pending, (state) => {
        state.productSingleStatus = STATUS.IDLE;
      })
      .addCase(getProductSingle.fulfilled, (state, action) => {
        state.productSingle = action.payload;
        state.productSingleStatus = STATUS.SUCCESS;
      })
      .addCase(getProductSingle.rejected, (state) => {
        state.productSingleStatus = STATUS.FAILED;
      });
  },
});

export const getProducts = createAsyncThunk(
  "products/getProducts",
  async (limit) => {
    try {
      const response = await axios.get(`${BASE_URL}products?limit=${limit}`);
      return response.data.products;
    } catch (error) {}
  }
);

export const getProductSingle = createAsyncThunk(
  "product-single/getProductSingle",
  async (id) => {
    const response = await axios.get(`${BASE_URL}products/${id}`);
    return response.data;
  }
);

export const allProducts = (state) => state.product.products;
export const allProductsStatus = (state) => state.product.productsStatus;
export const productSingle = (state) => state.product.productSingle;
export const allProductSingleStatus = (state) =>
  state.product.productSingleStatus;

export default productSlice.reducer;
