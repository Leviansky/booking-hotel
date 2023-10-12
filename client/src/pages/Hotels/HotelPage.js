import React from "react";
import { Navbar, SearchBarView, Footer, HotelCard } from "../../components";

const HotelPage = () => {
  return (
    <div>
      <Navbar />
      <SearchBarView />
      <HotelCard />
      <Footer />
    </div>
  );
};

export default HotelPage;
