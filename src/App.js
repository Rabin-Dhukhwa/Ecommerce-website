import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/registration-login/Login";
import Register from "./pages/registration-login/Register";
import Dashboard from "./pages/dashboard/Dashboard";
import Category from "./pages/category/Category";
// import Products from "./pages/products/Products";
import PaymentOptions from "./pages/payment-option/PaymentOptions";
import Orders from "./pages/order/Orders";
import Buyers from "./pages/buyer/Buyers";
// import Reviews from "./pages/review/Reviews";
import Admin from "./pages/admin/Admin";
import Profile from "./pages/profile/Profile";
import { useDispatch } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./config/config";
import { getUserProfile } from "./pages/registration-login/userAction";
import { PrivateRoute } from "./components/private-route/PrivateRoute";
import Products from "./pages/products/Products";
import Reviews from "./pages/review/Reviews";
import { useEffect } from "react";
import { fetchAllCategoryAction } from "./pages/category/catAction";
import { fetchAllProductAction } from "./pages/products/productAction";
import AddProduct from "./pages/products/AddProduct";
import EditProduct from "./pages/products/EditProduct";
import { fetchPaymentAction } from "./pages/payment-option/PaymentAction";
import { getAllAdminAction } from "./pages/admin/adminAction";
import Home from "./pages/home/Home";
import ResetPassword from "./pages/registration-login/ResetPassword";

function App() {
  const dispatch = useDispatch();
  onAuthStateChanged(auth, (user) => {
    if (user?.uid) {
      dispatch(getUserProfile(user?.uid));
    }
  });
  // fetch anything you need in the multipl places of the app
  useEffect(() => {
    dispatch(fetchAllCategoryAction());
    dispatch(fetchAllProductAction());
    dispatch(fetchPaymentAction());
    dispatch(getAllAdminAction());
  });
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/password-reset-request" element={<ResetPassword />} />

        {/* // private routes  */}
        <Route
          path="/registration"
          element={
            <PrivateRoute>
              <Register />
            </PrivateRoute>
          }
        />

        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
        <Route
          path="/home"
          element={
            // <PrivateRoute>
            <Home />
            // </PrivateRoute>
          }
        />
        <Route
          path="/categories"
          element={
            <PrivateRoute>
              <Category />
            </PrivateRoute>
          }
        />
        <Route
          path="/products"
          element={
            <PrivateRoute>
              <Products />
            </PrivateRoute>
          }
        />
        <Route
          path="/product/new"
          element={
            <PrivateRoute>
              <AddProduct />
            </PrivateRoute>
          }
        />
        <Route
          path="/product/edit/:id"
          element={
            <PrivateRoute>
              <EditProduct />
            </PrivateRoute>
          }
        />
        <Route
          path="/payment-options"
          element={
            <PrivateRoute>
              <PaymentOptions />
            </PrivateRoute>
          }
        />
        <Route
          path="/orders"
          element={
            <PrivateRoute>
              <Orders />
            </PrivateRoute>
          }
        />
        <Route
          path="/buyers"
          element={
            <PrivateRoute>
              <Buyers />
            </PrivateRoute>
          }
        />
        <Route
          path="/reviews"
          element={
            <PrivateRoute>
              <Reviews />
            </PrivateRoute>
          }
        />
        <Route
          path="/admin"
          element={
            <PrivateRoute>
              <Admin />
            </PrivateRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <PrivateRoute>
              <Profile />
            </PrivateRoute>
          }
        />
      </Routes>

      <ToastContainer />
    </div>
  );
}

export default App;
