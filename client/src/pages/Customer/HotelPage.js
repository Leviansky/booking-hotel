import React from "react";
import { Navbar, SearchBarView, Footer, HotelCard } from "../../components";
import "./Hotel.css";

const HotelPage = () => {
  return (
    <div>
      <Navbar isLogin={true} />
      {/* <SearchBarView /> */}
      <HotelCard />
      <Footer />
    </div>
  );
};

export default HotelPage;
