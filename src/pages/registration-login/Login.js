import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Header from "../../components/layout/Header";
import { Footer } from "../../components/layout/Footer";
import { CustomInput } from "../../components/custom-input/CustomInput";
import { useEffect, useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../config/config";
import { toast } from "react-toastify";
import { createNewAdminAuth, signInUserAction } from "./userAction";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    // role: "admin",
  });

  const { uid } = useSelector((state) => state.user);

  useEffect(() => {
    uid && navigate("/dashboard");
  }, [uid, navigate]);

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
    const { password, email } = form;

    dispatch(signInUserAction({ password, email }));
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
            Forget Password? <br />
            <Link to="/password-reset-request">Reset Now!</Link>
          </p>
        </Form>
      </main>
      <Footer />
    </>
  );
};

export default Login;
