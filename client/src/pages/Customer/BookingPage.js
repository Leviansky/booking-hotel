import React, { useEffect, useState } from "react";
import { Navbar, Carousels, Footer } from "../../components";

const BookingPage = () => {
  const [name, setName] = useState("");
  useEffect(() => {
    setName(localStorage.getItem("name"));
  });
  return (
    <>
      <Navbar isLogin={true} />
      <Footer />
    </>
  );
};

export default BookingPage;
