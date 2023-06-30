import React, { useState } from "react";
import { Link } from "react-router-dom";

import { AiOutlineLeft } from "react-icons/ai";
import { CustomInput } from "../../components/custom-input/CustomInput";
import { Button, Form } from "react-bootstrap";
import slugify from "slugify";
import { useDispatch, useSelector } from "react-redux";
import { addNewProductAction } from "./productAction";
// import { addNewProductAction } from "./productAction";
// import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
// import { storage } from "../../config/firebase-config";
// import ProgressBar from "react-bootstrap/ProgressBar";

const NewProduct = () => {
  const dispatch = useDispatch();
  const [form, setForm] = useState({});
  const { catList } = useSelector((state) => state.category);
  // const [progress, setProgress] = useState(0);

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();

    const product = {
      ...form,
      createdAt: Date.now(),
      slug: slugify(form.name),
    };
    dispatch(addNewProductAction({ ...product }));
    dispatch(fethProductsAction());
  };

  const inputs = [
    {
      label: "Product Name",
      name: "name",
      type: "text",
      placeholder: "Laptop",
      required: true,
      value: form.name,
    },
    {
      label: "Price",
      name: "price",
      type: "number",
      placeholder: "34",
      required: true,
      value: form.price,
    },
    {
      label: "Qty",
      name: "qty",
      type: "number",
      placeholder: "44",
      value: form.qty,
    },
    {
      label: "Sales Price",
      name: "salesPrice",
      type: "number",
      placeholder: "30",

      value: form.salesPrice,
    },
    {
      label: "Sales Starts",
      name: "salesStarts",
      type: "date",
      value: form.salesStarts,
    },
    {
      label: "Sales Ends",
      name: "salesEnds",
      type: "date",

      value: form.salesEnds,
    },
    {
      label: "Description",
      name: "description",
      type: "text",
      as: "textarea",
      value: form.description,
      rows: 10,
    },
  ];

  return (
    <>
      <Link to="/products" className="btn btn-secondary mt-2">
        <AiOutlineLeft /> Back
      </Link>
      <h3 className="mt-4">Add New Product</h3>
      <hr />

      {/* form   here */}
      <Form onSubmit={handleOnSubmit}>
        <Form.Group className="mt-3">
          <label htmlFor="">Select category</label>
          <Form.Select name="parentCat" required>
            <option value="">-- Select One --</option>
            {catList.map((item) => (
              <option value={item.slug}>{item.name}</option>
            ))}
          </Form.Select>
        </Form.Group>

        {inputs.map((item, i) => (
          <CustomInput {...item} onChange={handleOnChange} />
        ))}

        {/* <Form.Group className="mt-3">
          <label htmlFor="">Select category</label>
          <Form.Control
            type="file"
            name="thumbnail" */}
        {/* // onChange={} */}
        {/* /> */}
        {/* <ProgressBar animated now={progress} /> */}
        {/* </Form.Group> */}

        <div className="mt-3 mb-5 d-grid">
          <Button variant="primary" type="submit">
            Add Product
          </Button>
        </div>
      </Form>
    </>
  );
};

export default NewProduct;
