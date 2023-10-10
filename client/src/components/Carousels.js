import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Carousel1 from "../images/img-carousel-1.jpg";
import Carousel2 from "../images/img-carousel-2.jpg";
import Carousel3 from "../images/img-carousel-3.jpg";

const Carousels = () => {
  return (
    <Carousel>
      <div className="carousel">
        <img src={Carousel1} alt="" />
        <p className="carousel">Our Hotels</p>
      </div>
      <div className="carousel">
        <img src={Carousel2} alt="" />
        <p className="carousel">Our Hotels</p>
      </div>
      <div className="carousel">
        <img src={Carousel3} alt="" />
        <p className="carousel">Our Hotels</p>
      </div>
    </Carousel>
  );
};

export default Carousels;
