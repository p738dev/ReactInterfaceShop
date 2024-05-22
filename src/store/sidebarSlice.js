import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isSidebarOpen: false,
};

export const sidebarSlice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    setSidebarOpen: (state) => {
      state.isSidebarOpen = true;
    },
    setSidebarClose: (state) => {
      state.isSidebarOpen = false;
    },
  },
});

export const { setSidebarClose, setSidebarOpen } = sidebarSlice.actions;
// export const getSidebarStatus = (state: RootState) =>
//   state.sidebar.isSidebarOpen;
export default sidebarSlice.reducer;
