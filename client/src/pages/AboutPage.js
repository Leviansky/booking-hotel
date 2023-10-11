import React from "react";
import { Footer, Navbar } from "../components";
// import About1 from "../images/img-about.jpg";

const AboutPage = () => {
  return (
    <>
      <Navbar />
        <div class="info-left">
          <h2 class="l-heading">
            <span class="text-primary">About </span>Us
          </h2>
          <p>
            First Hotel is a wonderfully decorated hotel located at a beautiful
            point in Islamabad. It features you to have a best view to explore
            the beautiful Pakistan with well-furnished rooms.
          </p>
          <p>
            So, Don't be late, A peaceful life is waiting for you. Just go, Book
            a room and Enjoy the beauty of nature.
          </p>
        </div>
      <Footer />
    </>
  );
};

export default AboutPage;
