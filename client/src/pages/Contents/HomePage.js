import React, {useState, useEffect} from "react";
import { Navbar, Carousels, Footer } from "../../components";
import { Link, useNavigate } from "react-router-dom";

const HomePage = () => {
  const [isLogin, setIsLogin] = useState(false)
  const navigate = useNavigate();
  useEffect(() => {
    if(localStorage.getItem('access_token')) {
      setIsLogin(true)
    } else {
      setIsLogin(false)
    }
  }, [isLogin])
  return (
    <>
      {
        !isLogin
        ? <><Navbar /><Carousels /><Footer /></>
        : navigate('/admin')
      }
    </>
  );
};

export default HomePage;
