import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import sidebarSlice from "./sidebarSlice";
import categorySLice from "./categorySLice";
import productSlice from "./productSlice";
import searchSlice from "./searchSlice";

export const store = configureStore({
  reducer: {
    cart: cartSlice,
    sidebar: sidebarSlice,
    category: categorySLice,
    product: productSlice,
    search: searchSlice,
  },
});

// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;
