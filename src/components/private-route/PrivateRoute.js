import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export const PrivateRouter = ({ children }) => {
  const { user } = useSelector((state) => state.user);
  return user?.uid ? children : <Navigate to="/login" />;
};
