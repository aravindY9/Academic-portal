import "./StudentProfile.css";

import React, { useEffect, useState } from "react";
import NavBar from "../UniversalComponents/NavBar";
import {useNavigate } from "react-router-dom";

function ProfilePage() {
  const navigate = useNavigate()
  const [profileData, setProfileData] = useState([]);
  const [error, setError] = useState(null);
  useEffect(() => {
    fetch('http://localhost/student/fetchStudentDetails.php', {
      credentials: 'include',
    })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error(`Response status is not 200: ${response.status}`);
      }
    })
      .then((data) => {
        // console.log(data); // Log the response
        setProfileData(data[0]);
      })
      .catch((error) => setError(error));
  }, []); 
  if (error) {
    // Handle the error condition, e.g., server is down
    return <div>Access Denied: Server is not responding.</div>;
  }

  // Check if profileData is not empty before accessing its properties
  const handleEdit = () => {
    // Define the updated user data
    const updatedProfileData = {
        studentID: profileData.ID,
        name: profileData.NAME,
        // TYPE: profileData.TYPE,
        email: profileData.email,
        phone: profileData.phone
    };
    // console.log(JSON.stringify(updatedProfileData));
    // Send a POST request to update the user data
    fetch('http://localhost/ph-3/updateProfile.php', {
      method: "POST",
      headers: {
          "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedProfileData),
      })
      .then((response) => response.json())
      .then((data) => {
          if (data.message) {
              // Handle a successful update
              // alert(data.message);
              navigate("/student/profile");
          } else {
              // Handle errors
              alert(data.error);
          }
      })
      .catch((error) => {
          // Handle network or request errors
          console.error("Error updating user data:", error);
      });

};
  return (
    <div>
      <NavBar x="indexNav" />
      <div className="homepage-content">
        <div className="homepage-content-txt">
          Admin Details:
          <div className="sub-content-txt">
            <b>Name:</b> {profileData.NAME} <br />
            <b>Email:</b> {profileData.email} <br />
            <b>UTA ID:</b> {profileData.ID}
          </div>
        </div>
      </div>
      <div>
        <br /> <br />
        <div className="feedback-label">
          <div className="feedback-txt">Update details:</div>
          <br />
          <input
            type="text"
            className="update-details-inp"
            placeholder="Enter name"
            value={profileData.NAME}
            onChange={(e) => setProfileData({ ...profileData, NAME: e.target.value })}
          />
          <br />
          <input
            type="text"
            className="update-details-inp"
            placeholder="Enter email"
            value={profileData.email}
            onChange={(e) => setProfileData({ ...profileData, email: e.target.value })}
          />
          <br />
          <input
            type="text"
            className="update-details-inp"
            placeholder="Enter phone"
            value={profileData.ID}
            onChange={(e) => setProfileData({ ...profileData, phone: e.target.value })}
          />
          <br />
          <button className="feedback-submit-btn" onClick={handleEdit}>Update</button>
        </div>
        <br />
        <br />
        <br />
      </div>
    </div>
  );
}

export default ProfilePage;
