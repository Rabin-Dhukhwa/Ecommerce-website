import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./pages/registration-login/userSlice";

const store = configureStore({
  reducer: {
    adminInfo: userReducer,
  },
});
export default store;
