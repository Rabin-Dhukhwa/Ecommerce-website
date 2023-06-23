import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./pages/registration-login/userSlice";

const store = configureStore({
  reducer: userReducer,
});
export default store;
