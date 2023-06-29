import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  catList: [],
  selectedCat: {},
};
const catSlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    setCatList: (state, { payload }) => {
      state.catList = payload;
    },
    setSelectedCat: (state, { payload }) => {
      state.selectedCat = payload;
    },
  },
});

export const { reducer, actions } = catSlice;

export const { setCatList, setSelectedCat } = actions;
export default reducer;
