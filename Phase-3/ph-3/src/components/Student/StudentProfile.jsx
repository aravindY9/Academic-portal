import "./StudentProfile.css";

import React, { useEffect, useState } from "react";
import NavBar from "../UniversalComponents/NavBar";
import {useNavigate } from "react-router-dom";

function ProfilePage() {
  const navigate = useNavigate()
  const [profileData, setProfileData] = useState([]);
  const [error, setError] = useState(null);
  useEffect(() => {
    fetch('http://localhost/A/student/fetchStudentDetails.php', {
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
        console.log(data); // Log the response
        setProfileData(data[0]);
      })
      .catch((error) => setError(error));
  }, []); 
  if (error) {
    // Handle the error condition, e.g., server is down
    console.log(error);
    return <div>Access Denied: Server is not responding.</div>;
  }

  // Check if profileData is not empty before accessing its properties
  const handleEdit = () => {
    // Define the updated user data
    const updatedProfileData = {
        StudentID : profileData.StudentID,
        Name: profileData.Name,
        Email: profileData.Email,
        Phone: profileData.Phone
    };
    console.log(JSON.stringify(updatedProfileData),"sanjay");
    // Send a POST request to update the user data
    fetch('http://localhost/A/student/updateProfile.php', {
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
              navigate("/Student/StudentProfile");
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
          Student Details:
          <div className="sub-content-txt">
            <b>Name:</b> {profileData.Name} <br />
            <b>Email:</b> {profileData.Email} <br />
            <b>UTA ID:</b> {profileData.StudentID}
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
            value={profileData.Name}
            onChange={(e) => setProfileData({ ...profileData, Name: e.target.value })}
          />
          <br />
          <input
            type="text"
            className="update-details-inp"
            placeholder="Enter email"
            value={profileData.Email}
            onChange={(e) => setProfileData({ ...profileData, Email: e.target.value })}
          />
          <br />
          <input
            type="text"
            className="update-details-inp"
            placeholder="Enter phone"
            value={profileData.StudentID}
            onChange={(e) => setProfileData({ ...profileData, Phone: e.target.value })}
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
