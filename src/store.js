import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./pages/registration-login/userSlice";
import catReducer from "./pages/category/catSlice";
import systemReducer from "./system-state/systemSlice";

const store = configureStore({
  reducer: {
    adminInfo: userReducer,
    category: catReducer,
    system: systemReducer,
  },
});
export default store;
