import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  selectedProd: {},
};
const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setProduct: (state, { payload }) => {
      state.products = payload;
    },
  },
});

export const { setProduct } = productSlice.actions;
export default productSlice.reducer;
