import React from "react";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import { signOut } from "firebase/auth";
import { auth } from "../../config/config";
import { useDispatch } from "react-redux";
import { setUser } from "../../pages/registration-login/userSlice";

const Header = () => {
  const dispatch = useDispatch();
  const handleOnLogout = () => {
    signOut(auth).then(() => {
      //reset user state
      dispatch(setUser({}));
    });
  };
  return (
    <Navbar bg="dark" variant="dark" expand="md">
      <Container>
        {/* <Navbar.Brand href="/">CTS</Navbar.Brand> */}
        <Link to="/" className="navbar-brand">
          CTS
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto gap-3">
            <Link to="/" className="nav-link" title="Home">
              <AiFillHome />
            </Link>
            <Link to="/dashboard" className="nav-link">
              Dashboard
            </Link>
            <Link to="/registration" className="nav-link">
              Signup
            </Link>
            <Link to="/login" className="nav-link">
              Login
            </Link>

            <Link to="/logout" className="nav-link" onClick={handleOnLogout}>
              Logout
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
