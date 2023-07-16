import React from "react";
import AdminLayout from "../../components/layout/AdminLayout";
import { SelectPayment } from "../../components/payment-option/SelectPayment";

const PaymentOptions = () => {
  return (
    <AdminLayout pageTitle="Payment Options">
      <SelectPayment />
    </AdminLayout>
  );
};

export default PaymentOptions;
