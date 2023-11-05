import React, { useEffect, useState } from "react";
import NavBar from "../UniversalComponents/NavBar";
import {useNavigate } from "react-router-dom";
function ProfilePage() {
  const navigate = useNavigate()
  const [profileData, setProfileData] = useState([]);
  const [error, setError] = useState(null);
  useEffect(() => {
    fetch('http://localhost/A/admin/profile.php', {
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
    console.log(error);
    return <div>Access Denied: Server is not responding.</div>;
  }

  // Check if profileData is not empty before accessing its properties
  const handleEdit = () => {
    // Define the updated user data
    const updatedProfileData = {
        id: profileData.ID,
        NAME: profileData.NAME,
        TYPE: profileData.TYPE,
        EMAIL: profileData.EMAIL,
        PERMISSION_NAME: profileData.PERMISSION_NAME,
        PERMISSION_VALUE: profileData.PERMISSION_VALUE,
    };
    console.log(JSON.stringify(updatedProfileData));
    // Send a POST request to update the user data
    fetch(`http://localhost/backend/updateUserData.php`, {
      method: "POST",
      headers: {
          "Content-Type": "application/json",

      },
      credentials:"include",
      body: JSON.stringify(updatedProfileData),
      })
      .then((response) => response.json())
      .then((data) => {
          if (data.message) {
              // Handle a successful update
              // alert(data.message);
              navigate("/admin/profile");
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
      <NavBar x="instructorNav" />
      <div className="homepage-content">
        <div className="homepage-content-txt">
          Instructor Details:
          <div className="sub-content-txt">
            <b>Name:</b> {profileData.NAME} <br />
            <b>Email:</b> {profileData.EMAIL} <br />
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
            value={profileData.EMAIL}
            onChange={(e) => setProfileData({ ...profileData, EMAIL: e.target.value })}
          />
          <br />
          <input
            type="text"
            className="update-details-inp"
            placeholder="Enter ID"
            value={profileData.ID}
            onChange={(e) => setProfileData({ ...profileData, id: e.target.value })}
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
