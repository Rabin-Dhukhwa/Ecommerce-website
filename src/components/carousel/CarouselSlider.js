import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import img1 from "./home-img/dash3.jpg";
import img2 from "./home-img/img13.jpg";
import img3 from "./home-img/img6.jpg";

const CarouselSlider = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel
      activeIndex={index}
      onSelect={handleSelect}
      slide={false}
      data-bs-theme="dark"
    >
      <Carousel.Item interval={3000}>
        <img className="d-block w-100 " src={img1} alt="First slide" />
        <Carousel.Caption>
          <h1>Content Management System</h1>
          <h5>Manage TECHMART </h5>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1500}>
        <img className="d-block w-100" src={img2} alt="Second slide" />

        <Carousel.Caption>
          <h1>Manage Your Products</h1>
          <h5>Provide Best User Experience</h5>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img className="d-block w-100" src={img3} alt="Third slide" />

        <Carousel.Caption>
          <h1>Manage User Accounts</h1>
          <h5>Handle User Profiles</h5>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    // -------------------------------
  );
};

export default CarouselSlider;
