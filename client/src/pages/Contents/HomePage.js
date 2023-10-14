import React, {useState, useEffect} from "react";
import { Navbar, Carousels, Footer } from "../../components";
import { Link, useNavigate } from "react-router-dom";

const HomePage = () => {
  const [isLogin, setIsLogin] = useState(false)
  const [role, setRole] = useState('');
  const navigate = useNavigate();
  useEffect(() => {
    if(localStorage.getItem('access_token')) {
      setIsLogin(true)
      setRole(localStorage.getItem('role'))
    } else {
      setIsLogin(false)
    }
  }, [isLogin])
  return (
    <>
      {
        !isLogin
        ? <><Navbar isLogin={isLogin}/><Carousels /><Footer /></>
        : role === 'admin'
          ? navigate('/admin')
          : navigate('/customer')
      }
    </>
  );
};

export default HomePage;
