import React from "react";
import "../../navBar.css";
import ham from "../../photos/Hamburger_icon.png";
import cross from "../../photos/Cross_icon.png";
import { Link } from "react-router-dom";
// import SignOut from "./SignOut"
function student() {
  return (
    <div className="navList">
      <li
        onClick={() => {
          document.getElementsByClassName("navList")[0].style.transform =
            "translateX(-120%)";
        }}
      >
        <img src={cross} alt="" />
      </li>
      <li>Student</li>
      <li>
        <Link to="/student">Dashboard</Link>
      </li>
      <li>
        <Link to="/Student/StudentProfile">Profile</Link>
      </li>
      {/* <li>
        <Link to="/Student/StudentCourses">Courses</Link>
        </li>  */}
      {/* <li>
        <Link to="/Student/StudentExams">Exams</Link>
      </li> */}
      <li>
        <Link to="/Student/StudentFeedback">Feedback</Link>
      </li>
      <li>
        <Link to="/Student/StudentChat">Chat</Link>
      </li>
      <br />
      <li>
        <Link to="/signout">Signout</Link>
      </li>
    </div>
  );
}

function AdminNav() {
  return (
    <div className="navList">
      <li
        onClick={() => {
          document.getElementsByClassName("navList")[0].style.transform =
            "translateX(-120%)";
        }}
      >
        <img src={cross} alt="" />
      </li>
      <li>Admin</li>
      <li>
        <Link to="/admin/">Dashboard</Link>
      </li>
      <li>
        <Link to="/admin/profile">Profile</Link>
      </li>
      <li>
        <Link to="/admin/accounts">Accounts</Link>
      </li>
      <li>
        <Link to="/admin/course">Course</Link>
      </li>
      <li>
        <Link to="/admin/chat">Chat</Link>
      </li>
      <br />
      <li>
        <Link to="/signout">Signout</Link>
      </li>
    </div>
  );
}

function program() {
  return (
    <div className="navList">
      <li
        onClick={() => {
          document.getElementsByClassName("navList")[0].style.transform =
            "translateX(-120%)";
        }}
      >
        <img src={cross} alt="" />
      </li>
      <li>Coordinator</li>
      <li>
        <Link to="/program/">Dashboard</Link>
      </li>
      <li>
        <Link to="/program/profile">Profile</Link>
      </li>
      <li>
        <Link to="/program/course">Course</Link>
      </li>
      <li>
        <Link to="/program/chat">Chat</Link>
      </li>
      <br />
      <li>
        <Link to="/signout">Signout</Link>
      </li>
    </div>
  );
}


function instructor() {
  return (
    <div className="navList">
      <li
        onClick={() => {
          document.getElementsByClassName("navList")[0].style.transform =
            "translateX(-120%)";
        }}
      >
        <img src={cross} alt="" />
      </li>
      <li>Instructor</li>
      <li>
        <Link to="/Instructor/">Dashboard</Link>
      </li>
      <li>
        <Link to="/Instructor/profile">Profile</Link>
      </li>
      <li>
        <Link to="/Instructor/Student">My Students</Link>
      </li>
      {/* <li>
        <Link to="/Instructor/createAssignment">Assessments</Link>
      </li>
      <li>
        <Link to="/Instructor/Courses">Course</Link>
      </li> */}
      <li>
        <Link to="/Instructor/chat">Chat</Link>
      </li>
      <br />
      <li>
        <Link to="/signout">Signout</Link>
      </li>
    </div>
  );
}

function qa() {
  return (
    <div className="navList">
      <li
        onClick={() => {
          document.getElementsByClassName("navList")[0].style.transform =
            "translateX(-120%)";
        }}
      >
        <img src={cross} alt="" />
      </li>
      <li>QA</li>
      <li>
        <Link to="/qa">Dashboard</Link>
      </li>
      <li>
        <Link to="/qa/profile">Profile</Link>
      </li>
      <li>
        <Link to="/qa/students">Students</Link>
      </li>
      <li>
        <Link to="/qa/course">Courses</Link>
      </li>
      <li>
        <Link to="/qa/chat">Chat</Link>
      </li>
      <br />
      <li>
        <Link to="/signout">Signout</Link>
      </li>
    </div>
  );
}

function whichNav(navto) {
  if (navto === "indexNav") {
    return student();
  } else if (navto === "admin") {
    return <AdminNav />;
  } else if (navto === "instructorNav") {
    return instructor();
  }else if (navto === "program") {
    return program();
  }else if (navto === "qanav") {
    return qa();
  }
  // else if(navto === "dashboard"){
  //   return dashboard();
  // }
}


function NavBar(props) {
  // const btn = document.getElementById("menuBtn");
  // btn.addEventListener("click", () => {
  //   console.log("clicked");
  // });
  return (
    <div>
      <div className="header" id="menuBtn">
        <img
          src={ham}
          alt=""
          onClick={() => {
            document.getElementsByClassName("navList")[0].style.transform =
              "translateX(0%)";
            // document.getElementsByClassName("navList")[0].style.transition = "all 0.4s";
          }}
        />
        Mav Program
      </div>
      <div className="nav">{whichNav(props.x)}</div>
    </div>
  );
}

export default NavBar;
