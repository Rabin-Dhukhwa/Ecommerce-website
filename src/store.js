import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./pages/registration-login/userSlice";
import catReducer from "./pages/category/catSlice";
import systemReducer from "./system-state/systemSlice";
import productReducer from "./pages/products/productSlice";
import paymentReducer from "./pages/payment-option/paymentSlice";
import allAdminReducer from "./pages/admin/adminSlice";

const store = configureStore({
  reducer: {
    adminInfo: userReducer,
    categories: catReducer,
    system: systemReducer,
    products: productReducer,
    paymentOptions: paymentReducer,
    allAdmins: allAdminReducer,
  },
});
export default store;
