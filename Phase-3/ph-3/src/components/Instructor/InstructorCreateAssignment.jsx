import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import NavBar from "../UniversalComponents/NavBar";
import Forms from "../UniversalComponents/Forms";
import "./InstructorStyle.css";
// import Header from './components/UniversalComponents/Header';

function App() {
  const navigate = useNavigate();
  const [assignData, setAssignData] = useState({
    LINK: "",
    MAXSCORE: "",
    NAME: "",
    CourseCode: "",
    Instructor: "",
  });

  const upload = () => {
    const updatedAssignData = {
      LINK: assignData.LINK,
      MAXSCORE: assignData.MAXSCORE,
      NAME: assignData.NAME,
      CourseCode: assignData.CourseCode,
      Instructor: assignData.Instructor,
    };

    fetch(`http://localhost/backend/creacteassignment.php`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedAssignData),
      credentials: "include",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        // Check for empty response
        if (response.status === 204) {
          return null; // No content
        }
        return response.json(); // Parse JSON response
      })
      .then((data) => {
        if (data === "Success") {
          alert(data);
          navigate("/Instructor");
        } else {
          alert(data.split(":")[2]);
        }
      })
      .catch((error) => {
        console.error("Error updating user data:", error);
      });
  };
  console.log(assignData);
  return (
    <div className="sfe-mainBody">
      <div className="pageFormat">
        <NavBar x="instructorNav" />
      </div>
      <br />
      <br />
      <div className="studentBody">
        Enter new assignment details: <br />
        <input
          type="text"
          placeholder="Enter assignment name"
          className="ice-input"
          onChange={(e) => setAssignData("NAME", e.target.value)}
        />
        <br />
        <input
          type="text"
          placeholder="Enter assignment link"
          className="ice-input"
          onChange={(e) => setAssignData("LINK", e.target.value)}
        />
        <br />
        <input
          type="number"
          placeholder="Enter max score"
          className="ice-input"
          onChange={(e) => setAssignData("MAXSCORE", e.target.value)}
        />{" "}
        <br />
        <input
          type="number"
          placeholder="Enter Instructor ID"
          className="ice-input"
          onChange={(e) => setAssignData("InstructorID", e.target.value)}
        />{" "}
        <br />
        <input
          type="text"
          placeholder="Enter Course Code"
          className="ice-input"
          onChange={(e) => setAssignData("CourseCode", e.target.value)}
        />{" "}
        <br />
        <input
          type="date"
          placeholder="Enter exam date"
          className="ice-input"
          onChange={(e) => setAssignData("DUE", e.target.value)}
        />
        <br />
        <button type="submit" className="ic-createAssign" onClick={upload}>
        Create Assignment
        </button>
      </div>
    </div>
  );
}

export default App;
