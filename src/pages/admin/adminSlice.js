import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allAdminsList: [],
};
const adminSlice = createSlice({
  name: "allAdmin",
  initialState,
  reducers: {
    setAdminList: (state, { payload }) => {
      state.allAdminsList = payload;
    },
  },
});

export const { reducer, actions } = adminSlice;

export const { setAdminList } = actions;
export default reducer;
