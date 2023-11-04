import React from "react";
import "../../Forms.css";

function studentFeedback(props) {


  
  return (
      <form action="">
        Give Feedback <br /> 
        <input type="number" placeholder="Enter StudentID" className="formInput"/>
        <br />
        <textarea name="" id="" cols="30" rows="10" placeholder="Enter Feedback" className="formTextArea"></textarea>
        <br />
        <button className="submit" onClick={props.function}>Submit</button>
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
