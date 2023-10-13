import React from "react";
import "../../Table.css";

function examTabStudent() {
  return (
    <div className="tableScroll">
      <table>
        <tr>
          <th>Exam Name</th>
          <th>Grade</th>
        </tr>
        <tr>
          <td>
            <p>Quiz-1</p>
          </td>
          <td>
            <p>80/100</p>
          </td>
        </tr>
        <tr>
          <td>
            <p>Assignment-1</p>
          </td>
          <td>
            <p>85/100</p>
          </td>
        </tr>
        <tr>
          <td>
            <p>Quiz-2</p>
          </td>
          <td>
            <p>85/100</p>
          </td>
        </tr>
        <tr>
          <td>
            <p>Assignment-2</p>
          </td>
          <td>
            <p>90/100</p>
          </td>
        </tr>
        <tr>
          <td>
            <p>Project</p>
          </td>
          <td>
            <p>92/100</p>
          </td>
        </tr>
      </table>
    </div>
  );
}
function assessmentTabStudent() {
  return (
    // <div className="tableScroll">
      <table>
        <tr>
          <th>Assessment Name</th>
          <th>Description</th>
          <th>Due Date</th>
          <th>Score</th>
          <th>Actions</th>
        </tr>
        <tr>
          <td>
            <p>Assignment 1</p>
          </td>
          <td>
            <p>Sorting</p>
          </td>
          <td>
            <p>09/30/2023</p>
          </td>
          <td>
            <p>100</p>
          </td>
          <td>
            <a href="ViewAssessments.html">View</a>
          </td>
        </tr>
        <tr>
          <td>
            <p>Assignment 2</p>
          </td>
          <td>
            <p>Data Cleaning</p>
          </td>
          <td>
            <p>10/5/2023</p>
          </td>
          <td>
            <p>100</p>
          </td>
          <td>
            <a href="ViewAssessments.html">View</a>
          </td>
        </tr>
      </table>
    // </div>
  );
}

function whichTab(x) {
  if (x === "examTabStudent") {
    return examTabStudent();
  }
  if (x === "assessmentTabStudent") {
    return assessmentTabStudent();
  }
}

function NavBar(props) {
  return (
    <div>
      <div className="tab">{whichTab(props.x)}</div>
    </div>
  );
}

export default NavBar;
