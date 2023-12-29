import React from "react";
import "./style.css";
import { Carousel } from "react-bootstrap";
import img1 from "../../assets/Images/img1.webp";
import img2 from "../../assets/Images/img22.avif";
import img3 from "../../assets/Images/img3.avif";
function Carousal() {
  return (
    <Carousel>
      <Carousel.Item>
        <img className="img-cont" src={img1} alt="img1" text="First slide" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nanital - Beautiful View.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="img-cont" src={img2} alt="img2" text="Second slide" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Nanital - Lake view.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="img-cont" src={img3} alt="img3" text="Third slide" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>Nanital - Mountain view.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Carousal;
