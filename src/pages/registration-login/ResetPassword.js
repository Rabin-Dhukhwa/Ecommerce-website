import React, { useState } from "react";
import Header from "../../components/layout/Header";
import { Footer } from "../../components/layout/Footer";
import { toast } from "react-toastify";
import { auth } from "../../config/config";
import { sendPasswordResetEmail } from "firebase/auth";
import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const ResetPassword = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState();

  const handleOnChange = (e) => {
    const { value } = e.target;

    setEmail(value);
  };

  console.log(email);
  const onResetPassword = (e) => {
    e.preventDefault();

    sendPasswordResetEmail(auth, email)
      .then(() => {
        // Password reset email sent!

        toast.success(
          "Reset password email has been sent to your email address"
        );
        navigate("/");
        // ..
      })
      .catch((error) => {
        // const errorCode = error.code;
        // const errorMessage = error.message;
        toast.error(error.message);
        // ..
      });
  };
  return (
    <>
      <Header />
      <main className="main ">
        <Form className="border p-5 shadow-lg mt-5" onSubmit={onResetPassword}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              onChange={handleOnChange}
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </main>

      <Footer />
    </>
  );
};

export default ResetPassword;
