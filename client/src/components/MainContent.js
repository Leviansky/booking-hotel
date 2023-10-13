import React from "react";
import { Routes, Route } from "react-router-dom";
import {
  HomePage,
  HotelPage,
  RoomPage,
  LoginPage,
  AdminPage,
  RegisterPage,
  AboutPage,
  AdminHotel,
  AdminCustomer,
  AdminBooking
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
        <Route path="/admin/hotel" element={<AdminHotel />}></Route>
        <Route path="/admin/customer" element={<AdminCustomer />}></Route>
        <Route path="/admin/booking" element={<AdminBooking />}></Route>
      </Routes>
    </>
  );
};

export default MainContent;
