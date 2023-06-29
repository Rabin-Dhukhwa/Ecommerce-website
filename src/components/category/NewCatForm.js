import React, { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { addCategoryAction } from "../../pages/category/catAction";
import { useDispatch } from "react-redux";
import slugify from "slugify";

export const NewCatForm = () => {
  const dispatch = useDispatch();

  const [form, setForm] = useState({
    status: "inactive",
  });
  const handleOnSubmit = (e) => {
    e.preventDefault();
    // console.log(form);
    const slug = slugify(form.name, { lower: true, trim: true });
    dispatch(addCategoryAction({ ...form, slug }));
  };

  const handleOnChange = (e) => {
    let { checked, name, value } = e.target;
    console.log(checked, name, value);

    if (name === "status") {
      value = checked ? "active" : "inactive";
    }

    setForm({
      ...form,
      [name]: value,
    });
  };

  return (
    <div>
      <Form
        className=" border p-5 shadow-lg rounded mt-5"
        onSubmit={handleOnSubmit}
      >
        <Row>
          <Col md="2">
            <Form.Group className="mb-3">
              <Form.Check
                name="status"
                type="switch"
                label="Status"
                onChange={handleOnChange}
              />
            </Form.Group>
          </Col>
          <Col md="5">
            <Form.Group className="mb-3">
              <Form.Control
                name="name"
                type="text"
                label=""
                onChange={handleOnChange}
              />
            </Form.Group>
          </Col>
          <Col md="5">
            <div className="d-grid">
              <Button variant="primary" type="submit">
                Add New Category
              </Button>
            </div>
          </Col>
        </Row>
      </Form>
    </div>
  );
};
