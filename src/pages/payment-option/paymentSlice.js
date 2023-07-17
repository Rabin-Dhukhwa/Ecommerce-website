import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  paymentOptions: {},
};
const catSlice = createSlice({
  name: "payment",
  initialState,
  reducers: {
    setSelectedPaymentOptions: (state, { payload }) => {
      state.paymentOptions = payload;
    },
  },
});

export const { reducer, actions } = catSlice;

export const { setSelectedPaymentOptions } = actions;
export default reducer;
