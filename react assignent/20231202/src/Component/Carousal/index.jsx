import React from "react";
import "./style.css";
import { Carousel } from "react-bootstrap";
import img1 from "../../assets/Images/first.webp";
import img2 from "../../assets/Images/second.webp";
import img3 from "../../assets/Images/third.webp";
import img4 from "../../assets/Images/fourth.webp";
function Carousal() {
  return (
    <Carousel>
      <Carousel.Item>
        <img className="img-cont" src={img1} alt="img1" text="First slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="img-cont" src={img3} alt="img3" text="Third slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="img-cont" src={img2} alt="img2" text="Second slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="img-cont" src={img4} alt="img3" text="forth slide" />
      </Carousel.Item>
    </Carousel>
  );
}

export default Carousal;
