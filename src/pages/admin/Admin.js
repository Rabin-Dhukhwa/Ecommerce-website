import React, { useEffect } from "react";
import AdminLayout from "../../components/layout/AdminLayout";
import { AllAdminTable } from "../../components/admin/AllAdminTable";
import { getAllAdminAction } from "../../pages/admin/adminAction";
import { useDispatch } from "react-redux";

const Admin = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllAdminAction());
  }, [dispatch]);

  return (
    <AdminLayout pageTitle="Admins">
      <AllAdminTable />
    </AdminLayout>
  );
};

export default Admin;
