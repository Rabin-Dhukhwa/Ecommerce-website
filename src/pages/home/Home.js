import "./home.css";
import React from "react";
import { Carousel } from "react-bootstrap";
import { RiArrowRightSLine, RiArrowLeftSLine } from "react-icons/ri";
import "bootstrap/dist/css/bootstrap.min.css";
import "animate.css/animate.min.css";
import { Footer } from "../../components/layout/Footer";
import Header from "../../components/layout/Header";
import img1 from "./home-img/img15.jpg";
import img2 from "./home-img/img13.jpg";
import img3 from "./home-img/img6.jpg";
import CarouselSlider from "../../components/carousel/CarouselSlider";

const Home = () => {
  const images = { img1, img2, img3 };
  return (
    <>
      <Header />
      <main className="main-home">
        <div className="home-carousel">
          <CarouselSlider images={images} />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Home;
