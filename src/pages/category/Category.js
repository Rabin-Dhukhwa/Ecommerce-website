import React, { useEffect } from "react";
import AdminLayout from "../../components/layout/AdminLayout";
import { NewCatForm } from "../../components/category/NewCatForm";
import { useDispatch } from "react-redux";
import { fetchAllCategoryAction } from "./catAction";
import { CategoryTable } from "../../components/category/CategoryTable";

const Category = () => {
  const dispatch = useDispatch();
  //when landing on this page always fetch the data
  useEffect(() => {
    dispatch(fetchAllCategoryAction());
  });

  return (
    <AdminLayout pageTitle="Category">
      <NewCatForm />
      <CategoryTable />
    </AdminLayout>
  );
};

export default Category;
