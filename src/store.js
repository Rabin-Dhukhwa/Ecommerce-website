import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./pages/registration-login/userSlice";
import catReducer from "./pages/category/catSlice";
import systemReducer from "./system-state/systemSlice";
import productReducer from "./pages/products/productSlic";

const store = configureStore({
  reducer: {
    adminInfo: userReducer,
    category: catReducer,
    system: systemReducer,
    product: productReducer,
  },
});
export default store;
