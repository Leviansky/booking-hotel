import React, { useEffect, useState } from "react";
import { Footer, Navbar, TestimonialSlider } from "../../components";
import "./Content.css";
import About1 from "../../images/img-about.jpg";

const AboutPage = () => {
  console.log(localStorage.getItem("access_token"))
  return (
    <>
      {
        localStorage.getItem("access_token") === null
        ? <Navbar isLogin={false}/>
        : <Navbar isLogin={true}/>
      }
      <div className="about">
        <div className="row p-3">
          <div className="col info-left text-center">
            <h1>
              <span className="text-warning">About </span>Us{" "}
            </h1>
            HotelLier is a wonderfully decorated hotel located at a beautiful
            point in Indonesia. It features you to have a best view to explore
            the beautiful Indonesia with well-furnished rooms. So, Don't be
            late, A peaceful life is waiting for you. Just go, Book a room and
            Enjoy the beauty of nature. Feeling of serenity will slowly follow,
            as you drive further through the ancient pine tree forest to our
            state of the art retreat. Upon entering, you are bound to be allured
            by the striking element of design, the one of its kind walkthrough
            aquarium. When you cross the threshold of reality, its exotic marine
            inhabitants shall lead you towards the inner falls, which guides you
            down into the majestic winter garden, indoor aqua park and the jewel
            of our property — 115m long filtered seawater pool built into
            mindfully designed panoramic deck.
          </div>
          <div className="col info-right">
            <div className="img-about">
              <img
                src={About1}
                alt="About Page"
              />
            </div>
          </div>
        </div>
        <div className="row">
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AboutPage;
