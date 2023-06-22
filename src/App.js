import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/registration-login/Login";
import Register from "./pages/registration-login/Register";
import Dashboard from "./pages/dashboard/Dashboard";
import Category from "./pages/category/Category";
import Products from "./pages/products/Products";
import PaymentOptions from "./pages/payment-option/PaymentOptions";
import Orders from "./pages/order/Orders";
import Buyers from "./pages/buyer/Buyers";
import Reviews from "./pages/review/Reviews";
import Admin from "./pages/admin/Admin";
import Profile from "./pages/profile/Profile";

function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />

        {/* // private routes  */}
        <Route path="/registration" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/categories" element={<Category />} />
        <Route path="/products" element={<Products />} />
        <Route path="/payment-options" element={<PaymentOptions />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/buyers" element={<Buyers />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>

      <ToastContainer />
    </div>
  );
}

export default App;
