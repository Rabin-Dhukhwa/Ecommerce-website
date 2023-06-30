import React from "react";
import AdminLayout from "../../components/layout/AdminLayout";
import NewProduct from "./NewProduct";
import { ProductTable } from "../../components/product/ProductTable";

const Products = () => {
  return (
    <AdminLayout pageTitle="Products">
      <NewProduct />
      <ProductTable />
    </AdminLayout>
  );
};

export default Products;
