import { jwtDecode } from "jwt-decode";
import React from "react";
import image from "../assets/home-page-pic.png";
const PatientHomePage = () => {
  const token = JSON.parse(localStorage.getItem("token"));
  const decoded = jwtDecode(token);
  // console.log(decoded);

  const fadeInStyle = {
    animation: 'fadeIn 2s ease-in-out'
  };

  const slideInStyle = {
    animation: 'slideIn 1.5s ease-in-out'
  };
  return (
    <>
      <div className="container mt-5 text-center" style={fadeInStyle}>
        <img
          src={image}
          alt="Gluco Guide"
          className="img-fluid mb-4"
          style={{ ...slideInStyle, maxWidth: "200px" }}
        />
        <h1 className="mb-4">Welcome to Gluco Guide</h1>
        <p className="lead">
          Thank you <b>{decoded.name}</b> for visiting our AI Assistant
        </p>
        <p className="lead">Chances of your Accuring Diabatics is <b className="text-white bg-danger py-2 px-3 border rounded-pill">"82%"</b></p>
        <b>Note:</b><span>The result is based on the data you inserted.</span>
      </div>
      <style>
        {`
      @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
      }
      @keyframes slideIn {
        from { transform: translateX(-100%); }
        to { transform: translateX(0); }
      }
    `}
      </style>
    </>
  );
};

export default PatientHomePage;
