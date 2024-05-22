import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { STATUS } from "../utils/status";
import { BASE_URL } from "../utils/apiURL";

const initialState = {
  categories: [],
  categoriesStatus: STATUS.IDLE,
  categoryProducts: [],
  categoryProductsStatus: STATUS.IDLE,
};

export const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllCategories.pending, (state) => {
        state.categoriesStatus = STATUS.LOADING;
      })
      .addCase(getAllCategories.fulfilled, (state, action) => {
        state.categories = action.payload;
        state.categoriesStatus = STATUS.SUCCESS;
      })
      .addCase(getAllCategories.rejected, (state) => {
        state.categoriesStatus = STATUS.FAILED;
      })
      .addCase(getProductsOfCategory.pending, (state) => {
        state.categoryProductsStatus = STATUS.LOADING;
      })
      .addCase(getProductsOfCategory.fulfilled, (state) => {
        state.categoryProductsStatus = STATUS.SUCCESS;
      })
      .addCase(getProductsOfCategory.rejected, (state) => {
        state.categoryProductsStatus = STATUS.FAILED;
      });
  },
});

export const getAllCategories = createAsyncThunk(
  "categories/getAllCategories",
  async () => {
    try {
      const response = await axios.get(`${BASE_URL}products/categories`);
      return response.data;
    } catch (error) {}
  }
);

export const getProductsOfCategory = createAsyncThunk(
  "category-products/getProductsOfCategory",
  async (category) => {
    try {
      const response = await axios.get(
        `${BASE_URL}products/category/${category}`
      );
      return response.data.products;
    } catch (error) {}
  }
);

export const allCategories = (state) => state.category.categories;
export const allProductsByCategory = (state) => state.category.categoryProducts;
export const categoryProductsStatus = (state) =>
  state.category.categoryProductsStatus;
export default categorySlice.reducer;
