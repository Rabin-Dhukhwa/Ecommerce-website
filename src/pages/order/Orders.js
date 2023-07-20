import React from "react";
import AdminLayout from "../../components/layout/AdminLayout";
import { OrderTable } from "../../components/order/OrderTable";

const Orders = () => {
  return (
    <AdminLayout pageTitle="Orders">
      <OrderTable />
    </AdminLayout>
  );
};

export default Orders;
