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
import { useDispatch } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./config/config";
import { getUserAction } from "./pages/registration-login/userAction";
import { PrivateRouter } from "./components/private-route/PrivateRoute";

function App() {
  const dispatch = useDispatch();
  onAuthStateChanged(auth, (user) => {
    if (user?.uid) {
      dispatch(getUserAction(user.uid));
    }
  });
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />

        {/* // private routes  */}
        <Route path="/registration" element={<PrivateRouter>
          <Register />
          </PrivateRouter>} />
        <Route path="/dashboard" element={<PrivateRouter></PrivateRouter><Dashboard />} />
        <Route path="/categories" element={<PrivateRouter></PrivateRouter><Category />} />
        <Route path="/products" element={<PrivateRouter></PrivateRouter><Products />} />
        <Route path="/payment-options" element={<PrivateRouter></PrivateRouter><PaymentOptions />} />
        <Route path="/orders" element={<PrivateRouter></PrivateRouter><Orders />} />
        <Route path="/buyers" element={<PrivateRouter></PrivateRouter><Buyers />} />
        <Route path="/reviews" element={<PrivateRouter></PrivateRouter><Reviews />} />
        <Route path="/admin" element={<PrivateRouter></PrivateRouter><Admin />} />
        <Route path="/profile" element={<PrivateRouter></PrivateRouter><Profile />} />
      </Routes>

      <ToastContainer />
    </div>
  );
}

export default App;
