import React from "react";
import { Footer, Navbar, TestimonialSlider } from "../../components";
import "./Content.css";
import About1 from "../../images/img-about.jpg";

const AboutPage = () => {
  return (
    <>
      <Navbar />
      <div className="about">
        <div className="row p-3">
          <div className="col info-left">
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
                src="https://images.pexels.com/photos/205342/pexels-photo-205342.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
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
