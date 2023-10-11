// import React from "react";
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from "react-responsive-carousel";
// import Carousel1 from "../images/img-carousel-1.jpg";
// import Carousel2 from "../images/img-carousel-2.jpg";
// import Carousel3 from "../images/img-carousel-3.jpg";

// const Carousels = () => {
//   return (
//     <Carousel>
//       <div className="carousel">
//         <img src={Carousel1} alt="" />
//         <p className="carousel">Our Hotels</p>
//       </div>
//       <div className="carousel">
//         <img src={Carousel2} alt="" />
//         <p className="carousel">Our Hotels</p>
//       </div>
//       <div className="carousel">
//         <img src={Carousel3} alt="" />
//         <p className="carousel">Our Hotels</p>
//       </div>
//     </Carousel>
//   );
// };

// export default Carousels;

import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../app/App.css";

const Carousels = () => {
  const settings = {
    fade: true,
    infinite: true,
    slideToShow: 1,
    slideToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    pauseOnHover: false,
  };
  return (
      <Slider {...settings}>
        <div className="slider slider-1">
          <div className="slider-text">
            <h5>Book Now</h5>
            <h1>Choose Our Best Hotels</h1>
          </div>
        </div>
        <div className="slider slider-2">
          <div className="slider-text">
            <h5>Book Now</h5>
            <h1>Choose Our Best Hotels</h1>
          </div>
        </div>
        <div className="slider slider-3">
          <div className="slider-text">
            <h5>Book Now</h5>
            <h1>Choose Our Best Hotels</h1>
          </div>
        </div>
      </Slider>
  );
};

export default Carousels;
