import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { GoPerson } from "react-icons/go";
import AuthPhoto  from "../../images/img-auth.jpg";
// import { login } from "../../axios/authAxios";
import "./Auth.css";
import axios from "axios";
import { register } from "../../axios/authAxios";

const LoginPage = () => {
  const year = new Date().getFullYear();
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const registerHandler = async() => {
    try {
      let result = await register({username, email, password})
      if (result !== undefined) {
        navigate("/login")
      } 
      // console.log(result)
    } catch (error) {
      console.log(error.message)
    }
  }

  return (
    <div className="container-auth mt-5">
      <img src={AuthPhoto} alt="image" />
      <div></div>
      <div className="inputs">
        <div className="row text-center">
          <h1 className="fw-bold">Register</h1>
        </div>
        <div className="email_cont">
          <input type="text" placeholder="examplemail@mail.com" onChange={(e) => setEmail(e.target.value)}/>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              d="M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 10-2.636 6.364M16.5 12V8.25"
            />
          </svg>
        </div>
        <div className="email_cont">
          <input type="text" placeholder="username"  onChange={(e) => setUsername(e.target.value)}/>
          <GoPerson />
        </div>
        <div className="pass_cont">
          <input type="password" placeholder="password" onChange={(e) => setPassword(e.target.value)} />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
            />
          </svg>
        </div>
        <button className="btn btn-primary" onClick={() => registerHandler()}>Register</button>
        <Link className="text-center" to="/login">
          Already have an account? Login
        </Link>
        <div className="text-center">
          MiniBooking.com &copy; <span>{year}</span>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
