import React from "react";
import "../../Table.css";
import { Link } from "react-router-dom";

function examTabStudent() {
  return (
    // <div className="tableScroll">
    <table className="t-table">
      <tr>
        <th className="t-th">Exam Name</th>
        <th className="t-th">Grade</th>
      </tr>
      <tr>
        <td className="t-td">
          <p>Quiz-1</p>
        </td>
        <td className="t-td">
          <p>80/100</p>
        </td>
      </tr>
      <tr>
        <td className="t-td">
          <p>Assignment-1</p>
        </td>
        <td className="t-td">
          <p>85/100</p>
        </td>
      </tr>
      <tr>
        <td className="t-td">
          <p>Quiz-2</p>
        </td>
        <td className="t-td">
          <p>85/100</p>
        </td>
      </tr>
      <tr>
        <td className="t-td">
          <p>Assignment-2</p>
        </td>
        <td className="t-td">
          <p>90/100</p>
        </td>
      </tr>
      <tr>
        <td className="t-td">
          <p>Project</p>
        </td>
        <td className="t-td">
          <p>92/100</p>
        </td>
      </tr>
    </table>
  );
}
function assessmentTabStudent() {
  return (
    // <div className="tableScroll">
    <table className="t-table">
      <tr>
        <th className="t-th">Assessment Name</th>
        <th className="t-th">Description</th>
        <th className="t-th">Due Date</th>
        <th className="t-th">Score</th>
        <th className="t-th">Actions</th>
      </tr>
      <tr>
        <td className="t-td">
          <p>Assignment 1</p>
        </td>
        <td className="t-td">
          <p>Sorting</p>
        </td>
        <td className="t-td">
          <p>09/30/2023</p>
        </td>
        <td className="t-td">
          <p>100</p>
        </td>
        <td className="t-td">
          <Link to="/Student/StudentAssignment">View</Link>
        </td>
      </tr>
      <tr>
        <td className="t-td">
          <p>Assignment 2</p>
        </td>
        <td className="t-td">
          <p>Data Cleaning</p>
        </td>
        <td className="t-td">
          <p>10/5/2023</p>
        </td>
        <td className="t-td">
          <p>100</p>
        </td>
        <td className="t-td">
          <Link to="/Student/StudentAssignment">View</Link>
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
