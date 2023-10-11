import React from "react";
import { Footer, Navbar } from "../components";
import About1 from "../images/img-about.jpg";

const AboutPage = () => {
  return (
    <>
      <Navbar />
      <div className="row text-center">
        <h2>About Us</h2>
      </div>
      <div className="about">
        <div className="container about-img">
          <img src={About1}></img>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AboutPage;
