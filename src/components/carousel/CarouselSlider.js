import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import img1 from "./home-img/img15.jpg";
import img2 from "./home-img/img13.jpg";
import img3 from "./home-img/img6.jpg";

const CarouselSlider = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} slide={false}>
      <Carousel.Item interval={2000}>
        <img className="d-block w-100" src={img1} alt="First slide" />
        <Carousel.Caption>
          <h1>Welcome To Content Management System</h1>
          <p>Manage your Technology Store</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1500}>
        <img className="d-block w-100" src={img2} alt="Second slide" />

        <Carousel.Caption>
          <h1>Manage Your Products</h1>
          {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img className="d-block w-100" src={img3} alt="Third slide" />

        <Carousel.Caption>
          <h1>Manage user Accounts</h1>
          {/* <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p> */}
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    // -------------------------------
  );
};

export default CarouselSlider;
