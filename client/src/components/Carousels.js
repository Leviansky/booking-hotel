import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousels = ({name}) => {
  console.log(name)
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
            {
              name === undefined
              ? <>
                  <h5>Book Now</h5>
                  <h1>Choose Our Best Hotels</h1>
                </>
              : <>
                  <h5>Welcome</h5>
                  <h1>{name.toUpperCase()}</h1>
                </>
            }
          </div>
        </div>
        <div className="slider slider-2">
          <div className="slider-text">
          {
              name === undefined
              ? <>
                  <h5>Book Now</h5>
                  <h1>Choose Our Best Hotels</h1>
                </>
              : <>
                  <h5>Welcome</h5>
                  <h1>{name.toUpperCase()}</h1>
                </>
            }
          </div>
        </div>
        <div className="slider slider-3">
          <div className="slider-text">
            {
              name === undefined
              ? <>
                  <h5>Book Now</h5>
                  <h1>Choose Our Best Hotels</h1>
                </>
              : <>
                  <h5>Welcome</h5>
                  <h1>{name.toUpperCase()}</h1>
                </>
            }
          </div>
        </div>
      </Slider>
  );
};

export default Carousels;
