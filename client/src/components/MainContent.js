import React from "react";
import { Routes, Route } from "react-router-dom";
import { HomePage, Hotel, Room, LoginPage, AboutPage } from "../pages";

const MainContent = () => {
  return (
    <>
      <Routes>
        <Route path="" element={<HomePage />}></Route>
        <Route path="/about" element={<AboutPage />}></Route>
        <Route path="/hotels" element={<Hotel />}></Route>
        <Route path="/rooms" element={<Room />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
      </Routes>
    </>
  );
};

export default MainContent;
