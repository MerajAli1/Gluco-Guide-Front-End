import React, { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { BaseURL } from "../apiBaseURL/BaseURL";
const PatientProfile = () => {
  const [profileData, setProfileData] = useState({});
  const profileDataLocalStorage = localStorage.setItem(
    "profile data",
    JSON.stringify(profileData)
  );
  const getProfileData = async () => {
    //Getting token from local storage
    const token = JSON.parse(localStorage.getItem("token"));
    // console.log("token", token);
    try {
      const res = await axios.get(`${BaseURL}/user/viewprofile`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      // console.log(res.data.data);
      setProfileData(res.data.data);
    } catch (error) {
      console.log("error: ", error);
    }
  };
  useEffect(() => {
    getProfileData();
  }, []);
  return (
    <>
      <div className="container mt-5">
        <h1 className="text-center mb-4">Patient Profile</h1>
        <div className="row justify-content-center">
          <div className="col-md-6 text-center">
            <img
              width="50%"
              src={profileData.profilePic}
              alt="not found"
              className="img-fluid rounded-circle mb-3"
              style={{ border: "2px solid #ddd", padding: "5px" }}
            />
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-6 text-center">
            <div className="card p-3">
              <div className="card-body">
                <h5 className="card-title">Name: {profileData.name}</h5>
                <p className="card-text">Age: {profileData.age}</p>
                <p className="card-text">Weight: {profileData.weight}</p>
                <p className="card-text">Height: {profileData.height}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PatientProfile;
