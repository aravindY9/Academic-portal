import React from "react";
import "../../navBar.css";
import ham from "../../photos/Hamburger_icon.png";
import cross from "../../photos/Cross_icon.png";
import { Link } from "react-router-dom";

function student() {
  return (
    <div className="navList">
        <li onClick={
          () => {
            document.getElementsByClassName("navList")[0].style.transform = "translateX(-120%)";
          }
        }><img src={cross} alt=""/></li>
        <li>Student</li>
        <li>
          <Link to="/Student/StudentProfile">Profile</Link>
        </li>
        <li>
        <Link to="/student">Dashboard</Link>
        </li>
        <li>
        <Link to="/Student/StudentCourses">Courses</Link>
        </li> 
        <li>
        <Link to="/Student/StudentExams">Exams</Link>
        </li> 
        <li>
          <Link to="/Student/StudentFeedback">Feedback</Link> 
        </li>
        <li>
        <Link to="/Student/StudentChat">Chat</Link>
        </li><br />
        <li><a href="" className="signOut">Sign Out</a></li>
    </div>
  );
}

function AdminNav() {
  return (
    <div className="navList">
       <li onClick={
          () => {
            document.getElementsByClassName("navList")[0].style.transform = "translateX(-120%)";
          }
        }><img src={cross} alt=""/></li>
      <li><Link to="/admin/">Admin</Link></li>
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
      <li><a href="" className="signOut">Sign Out</a></li>
    </div>
  );
}

function whichNav(navto){
if(navto === "indexNav"){
  return student();
}else if (navto === "admin") {
  return <AdminNav />;
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
      <div className="header" id="menuBtn" >
        <img src={ham} alt="" onClick={()=>{
          document.getElementsByClassName("navList")[0].style.transform = "translateX(0%)";
          // document.getElementsByClassName("navList")[0].style.transition = "all 0.4s";
        }}/>
        Mav Program
      </div>
      <div  className="nav">{whichNav(props.x)}</div>
    </div>
  );
}

export default NavBar;
