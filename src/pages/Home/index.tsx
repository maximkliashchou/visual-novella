import React from "react";
import { useNavigate } from "react-router-dom";
import background from "../../assets/background1.png";
import loginButton from "../../assets/login.png";
import "./Home.css";

const Home = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/second");
  };

  return (
    <div className="home-container">
      <div
        className="background-image"
        style={{ backgroundImage: `url(${background})` }}
      >
        <div className="content">
          <img
            src={loginButton}
            alt="Login"
            className="login-button"
            onClick={handleLogin}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
