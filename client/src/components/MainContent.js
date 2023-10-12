import React, {useEffect, useState} from "react";
import { Routes, Route } from "react-router-dom";
import {
  HomePage,
  HotelPage,
  RoomPage,
  LoginPage,
  RegisterPage,
  AboutPage,
  AdminPage,
  Customers,
} from "../pages";

const MainContent = () => {
  return (
    <>
      <Routes>
        <Route path="" element={<HomePage />}></Route>
        <Route path="/about" element={<AboutPage />}></Route>
        <Route path="/hotels" element={<HotelPage />}></Route>
        <Route path="/rooms" element={<RoomPage />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/register" element={<RegisterPage />}></Route>
        <Route path="/admin" element={<AdminPage />}></Route>
        <Route path="/admins" element={<Customers/>}></Route>
      </Routes>
    </>
  );
};

export default MainContent;
