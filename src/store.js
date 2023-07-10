import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./pages/registration-login/userSlice";
import catReducer from "./pages/category/catSlice";
import systemReducer from "./system-state/systemSlice";
import productReducer from "./pages/products/productSlice";

const store = configureStore({
  reducer: {
    adminInfo: userReducer,
    categories: catReducer,
    system: systemReducer,
    products: productReducer,
  },
});
export default store;
