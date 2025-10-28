import React from "react";
import { useNavigate } from "react-router-dom";
import pergament from "../../assets/pergament.jpg";
import openButton from "../../assets/open.png";
import "./SecondPage.css";

const SecondPage = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/third");
  };

  return (
    <div className="second-page-container">
      <div
        className="background-image"
        style={{ backgroundImage: `url(${pergament})` }}
      >
        <div className="content">
          <img
            src={openButton}
            alt="Open"
            className="back-button"
            onClick={handleBack}
          />
        </div>
      </div>
    </div>
  );
};

export default SecondPage;
