import React from "react";
import "../../Forms.css";

function studentFeedback() {
  return (
      <form action="">
        Feedback <br /> 
        <input type="number" placeholder="Enter StudentID" />
        <br />
        <textarea name="" id="" cols="30" rows="10" placeholder="Enter Feedback"></textarea>
        <br />
        <button className="submit">Submit</button>
      </form>
  );
}
// function assessmentTabStudent() {
//   return (

//   );
// }

function whichTab(x) {
  if (x === "studentFeedback") {
    return studentFeedback();
  }
  //   if (x === "assessmentTabStudent") {
  //     return assessmentTabStudent();
  //   }
}

function NavBar(props) {
  return (
    <div>
      <div className="for">{whichTab(props.x)}</div>
    </div>
  );
}

export default NavBar;
