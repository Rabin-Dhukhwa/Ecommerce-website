import "./home.css";
import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "animate.css/animate.min.css";
// import { Footer } from "../../components/layout/Footer";
import Header from "../../components/layout/Header";

import CarouselSlider from "../../components/carousel/CarouselSlider";

const Home = () => {
  return (
    <>
      <Header />

      <CarouselSlider />
      {/* <Footer /> */}
    </>
  );
};

export default Home;
