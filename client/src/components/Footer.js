import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <h6>Hotel Booking</h6>
      <p>
        &copy; <span>{year}</span> MiniBooking.com - All Rights Copyright
        Reserved To{" "}
        <a target="_blank" rel="noreferrer" href="https://www.instagram.com/">
          Hotels
        </a>
      </p>
    </footer>
  );
};

export default Footer;
