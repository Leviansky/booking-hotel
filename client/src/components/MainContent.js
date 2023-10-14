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
  AdminBooking,
} from "../pages";
import CustomerPage from "../pages/Customer/CustomerPage";

const MainContent = () => {
  return (
    <>
      <Routes>
        <Route path="" element={<HomePage />}></Route>
        <Route path="about" element={<AboutPage />}></Route>
        <Route path="hotels" element={<HotelPage />}></Route>
        <Route path="login" element={<LoginPage />}></Route>
        <Route path="register" element={<RegisterPage />}></Route>
        <Route path="admin" element={<AdminPage />}>
          <Route path="hotel" element={<AdminHotel />}></Route>
          <Route path="customer" element={<AdminCustomer />}></Route>
          <Route path="booking" element={<AdminBooking />}></Route>
        </Route>
        <Route path="customer" element={<CustomerPage />}></Route>
        <Route path="hotel-detail" element={<RoomPage />}></Route>
      </Routes>
    </>
  );
};

export default MainContent;
