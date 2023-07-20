import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

const CarouselSlider = ({ images }) => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item interval={3000}>
        <img className="d-block w-100" src={images.img1} alt="First slide" />
        <Carousel.Caption>
          <h1>Welcome To Content Management System</h1>
          <p>Manage you Technology Store</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img className="d-block w-100" src={images.img2} alt="Second slide" />

        <Carousel.Caption>
          <h1>Manage Your Products</h1>
          {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img className="d-block w-100" src={images.img3} alt="Third slide" />

        <Carousel.Caption>
          <h1>Manage user Accounts</h1>
          {/* <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p> */}
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselSlider;
