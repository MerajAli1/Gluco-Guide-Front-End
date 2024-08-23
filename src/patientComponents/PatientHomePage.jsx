import { jwtDecode } from "jwt-decode";
import React, { useEffect, useState } from "react";
import image from "../assets/home-page-pic.png";
import axios from "axios";
import { BaseURL } from "../apiBaseURL/BaseURL";
const PatientHomePage = () => {
  const [MLModelData, setMLModelData] = useState(""); //State for ML Model Data
  const [allHealthHistoryDetails, setAllHealthHistoryDetails] = useState([]);
  const [loading, setLoading] = useState(false);
  const [profileData, setProfileData] = useState({});
  const token = JSON.parse(localStorage.getItem("token"));
  const decoded = jwtDecode(token);
  // console.log(decoded);

  const fadeInStyle = {
    animation: "fadeIn 2s ease-in-out",
  };

  const slideInStyle = {
    animation: "slideIn 1.5s ease-in-out",
  };

  const allHealthHistory = async () => {
    try {
      const token = JSON.parse(localStorage.getItem("token"));
      // console.log("token", token);
      const res = await axios.get(`${BaseURL}/user/healthhistory`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      // console.log(res.data.data);
      setAllHealthHistoryDetails(res.data.data);
    } catch (error) {
      console.log("error: ", error);
    }
  };

  //ML Model API
  const MLPerdictionFunc = async () => {
    setLoading(true);
    try {
      const res = await axios.post(
        "http://104.214.171.179/mlmodelapi/predict",
        {
          data: allHealthHistoryDetails,
        }
      );
      // console.log(res.data.result);
      setMLModelData(res.data.result);
      localStorage.setItem("MLModelData", JSON.stringify(res.data.result));
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log("error: ", error);
    }
  };

  //Fetch User data
  const userData = async () => {
      const token = JSON.parse(localStorage.getItem("token"));
      try {
        const res = await axios.get(`${BaseURL}/user/viewprofile`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setProfileData(res.data.data);
        console.log("profile data: ", res.data.data);
        
        localStorage.setItem("profile data", JSON.stringify(res.data.data));
      } catch (error) {
        console.log("error: ", error);
      }
  }
  useEffect(() => {
    allHealthHistory();
    userData();
  }, []);
  useEffect(() => {
    MLPerdictionFunc();
  }, [allHealthHistoryDetails]);
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
          Thank you <b>{profileData.name}</b> for visiting our AI Assistant
        </p>
        <p className="lead">
          {loading ? "Generating Results....." : MLModelData}
        </p>
        <b>Note:</b>
        <span>The result is based on the data you inserted.</span>
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
