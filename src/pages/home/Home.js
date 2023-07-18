import "./home.css";
import React from "react";
import { Carousel } from "react-bootstrap";
import { RiArrowRightSLine, RiArrowLeftSLine } from "react-icons/ri";
import "bootstrap/dist/css/bootstrap.min.css";
import "animate.css/animate.min.css";
import { Footer } from "../../components/layout/Footer";
import Header from "../../components/layout/Header";
import img1 from "./home-img/img8.jpg";
import img2 from "./home-img/img7.jpg";
import img3 from "./home-img/img4.jpg";

const Home = () => {
  return (
    <>
      <Header />
      <main className="main">
        <div className="home-page">
          <div className="hero animate__animated animate__fadeIn">
            <h1 className="animate__animated animate__bounceInDown">
              Welcome to Your CMS
            </h1>
            <p className="animate__animated animate__fadeIn">
              Manage your content efficiently with our powerful CMS
            </p>
          </div>
          <div className="features">
            <div className="feature animate__animated animate__fadeInLeft">
              <h2>Create and Edit Content</h2>
              <p>
                Easily create and edit various types of content using our
                intuitive interface.
              </p>
            </div>
            <div className="feature animate__animated animate__fadeInUp">
              <h2>Manage Media Files</h2>
              <p>
                Organize and access your media files in a centralized media
                library.
              </p>
            </div>
            <div className="feature animate__animated animate__fadeInRight">
              <h2>User Management</h2>
              <p>
                Create and manage user accounts with different roles and
                permissions.
              </p>
            </div>
          </div>
        </div>
        {/* <hr /> */}
        <div className="carousel-main">
          <Carousel>
            <Carousel.Item>
              <img className="d-block w-100" src={img1} alt="First slide" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={img2} alt="Second slide" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={img3} alt="Third slide" />
            </Carousel.Item>
          </Carousel>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Home;
