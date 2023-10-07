import React from "react";
import "../../navBar.css";
import ham from "../../photos/Hamburger_icon.png";
import cross from "../../photos/Cross_icon.png";

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
          <a href="">Profile</a>
        </li>
        <li>
          <a href="">Dashboard</a>
        </li>
        <li>
          <a href="">Courses</a>
        </li>
        <li>
          <a href="">Exams</a>
        </li>
    </div>
  );
}
function NavBar(props) {
  // const btn = document.getElementById("menuBtn");
  // btn.addEventListener("click", () => {
  //   console.log("clicked");
  // });
    return (
    <div>
      <div className="header" id="menuBtn" onClick={()=>{
          document.getElementsByClassName("navList")[0].style.transform = "translateX(0%)";
          document.getElementsByClassName("navList")[0].style.transition = "all 0.4s";
        }}>
        <img src={ham} alt="" />
        Mav Program
      </div>
      <div>{props.x === "indexNav" ? student() : "asdkjf"}</div>
    </div>
  );
}

export default NavBar;
