import React from "react";
import { Navbar, SearchBarView, Footer, HotelCard } from "../../components";

const Hotel = () => {
  return (
    <div>
      <Navbar />
      <SearchBarView />
      <HotelCard />
      <Footer />
    </div>
  );
};

export default Hotel;
