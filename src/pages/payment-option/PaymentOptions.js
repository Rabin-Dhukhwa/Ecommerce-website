import React from "react";
import AdminLayout from "../../components/layout/AdminLayout";
import { SelectPayment } from "../../components/payment-option/SelectPayment";
import { CurrentPayment } from "../../components/payment-option/CurrentPayment";

const PaymentOptions = () => {
  return (
    <AdminLayout pageTitle="Payment Options">
      <CurrentPayment />
      <SelectPayment />
    </AdminLayout>
  );
};

export default PaymentOptions;
