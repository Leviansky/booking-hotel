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
        <div className="row">
          <div className="row">
            <p>Lorem ipsum</p>
          </div>
          <div className="row">
            <img src={About1}></img>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AboutPage;
