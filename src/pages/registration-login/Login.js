import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Header from "../../components/layout/Header";
import { Footer } from "../../components/layout/Footer";
import { CustomInput } from "../../components/custom-input/CustomInput";
import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../config/config";
import { toast } from "react-toastify";
import { createAdminUser, createNewAdminAuth } from "./userAction";
import { Link } from "react-router-dom";

const Login = () => {
  const [form, setForm] = useState({
    role: "admin",
  });

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    console.log(form);
    const { confirmPassword, ...rest } = form;

    if (form.password !== confirmPassword) {
      return toast.error("Password should match!");
    }
    createNewAdminAuth(rest);
  };

  const inputFields = [
    {
      label: "Email",
      name: "email",
      type: "email",
      placeholder: "",
      required: true,
    },
    {
      label: "Password",
      name: "password",
      type: "password",
      placeholder: "",
      required: true,
      minLength: "6",
    },
  ];
  return (
    <>
      <Header />
      <main className="main">
        <Form
          className="register border p-5 shadow-lg rounded mt-5"
          onSubmit={handleOnSubmit}
        >
          <h1>Admin Login</h1>
          <hr />
          {inputFields.map((item, i) => (
            <CustomInput key={i} {...item} onChange={handleOnChange} />
          ))}

          <div className="d-grid">
            <Button variant="primary" type="submit">
              Login
            </Button>
          </div>
          <p className="text-end mt-3">
            Forget Password?
            <Link to="/password-reset-request">Reset Now!</Link>
          </p>
        </Form>
      </main>
      <Footer />
    </>
  );
};

export default Login;
