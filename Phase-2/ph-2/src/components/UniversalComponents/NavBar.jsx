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
          {/* <Link></Link> */}
          <a href="http://localhost:3000/Student/StudentAssignment.jsx">Profile</a>
          {/* <Link to="/Student/StudentHome">Dashboard</Link> */}
        </li>
        <li>
          <a href="StudentHome.jsx">Dashboard</a>
        </li>
        {/* <li>
          <a href="StudentCourses.jsx">Courses</a>
        </li> */}
        {/* <li>
          <a href="">Exams</a>
        </li> */}
        <li>
          <a href="">Feedback</a>
        </li>
        <li>
          <a href="">Chat</a>
        </li><br />
        <li><a href="" className="signOut">Sign Out</a></li>
    </div>
  );
}
function whichNav(navto){
if(navto === "indexNav"){
  return student();
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
