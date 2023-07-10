import React, { useEffect, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { addCategoryAction, deleteCat } from "../../pages/category/catAction";
import { useDispatch, useSelector } from "react-redux";

export const EditCatForm = () => {
  const dispatch = useDispatch();

  const [form, setForm] = useState({
    status: "inactive",
  });
  const { selectedCat } = useSelector((state) => state.categories);
  useEffect(() => {
    setForm(selectedCat);
  }, [selectedCat]);

  const handleOnSubmit = (e) => {
    e.preventDefault();

    dispatch(addCategoryAction(form)); // form already contain slug here
    // dispatch(addCategoryAction({ ...form, update: true }));//trying
  };

  const handleOnChange = (e) => {
    let { checked, name, value } = e.target;

    if (name === "status") {
      value = checked ? "active" : "inactive";
    }

    setForm({
      ...form,
      [name]: value,
    });
  };
  const handleOnDelete = () => {
    if (window.confirm("Are you sure you want to delete this category?")) {
      dispatch(deleteCat(form.slug));
    }
  };

  return (
    <div>
      <Form
        className=" border p-5 shadow-lg rounded mt-5"
        onSubmit={handleOnSubmit}
      >
        <Row>
          <Col>
            <Form.Group className="mb-3">
              <Form.Check
                name="status"
                type="switch"
                label="Status"
                onChange={handleOnChange}
                checked={form.status === "active"}
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3">
              <Form.Control
                name="name"
                type="text"
                required
                value={form.name}
                onChange={handleOnChange}
              />
            </Form.Group>
          </Col>
          <Col>
            <div className="d-grid">
              <Button variant="primary" type="submit">
                Update Category
              </Button>
            </div>
          </Col>
        </Row>
      </Form>
      <div className="d-grid">
        <Button onClick={handleOnDelete} variant="danger">
          Delete
        </Button>
      </div>
    </div>
  );
};
