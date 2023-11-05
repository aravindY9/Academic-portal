import React from "react";
import "./ViewPerformance.css"
import NavBar from "../UniversalComponents/NavBar";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams,useNavigate } from "react-router-dom";



function ViewPerformance(){
    const { studentId } = useParams();
    console.log(studentId);
  const [userData, setUserData] = useState([
    {Name:"",
      ID:"",
      Course:"",
      Grade:"",
      Quiz_1:"",
      Assignment_1:"",
      Quiz_2:"",
      Assignment_2:"",
      Project:""}
  ]);
  const [feedback, setFeedback] = useState([
  ]);
  const [error, setError] = useState(null);
    // console.log("STD",studentId);
    useEffect(() => {
        // Fetch user data using the 'userId' parameter
        fetch(`http://localhost/A/ProgramCoordinator/fetchUserData.php?id=${studentId}`, {
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
                console.log("fdd",data);
                setUserData(data[0]);
            })
            .catch((error) => setError(error));
    }, [studentId]);
    // console.log(studentId);
    if (error) {
      // Handle the error condition, e.g., server is down
      return <div>Access Denied: Server is not responding.</div>;
    }


    const submitFeedback =  () =>{
        const id = studentId;
        const content = feedback.content;
        console.log(JSON.stringify({id, content}));
        fetch('http://localhost/ProgramCoordinator/submitFeedback.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({id, content}),
        credentials: 'include',
      })
      
        .then((response) => response.json())
        .then((data) => {
          if(data.message){
            alert(data.message);
          }else{
            alert(data.error);
          }})
        .catch((error) => {
          console.error('Error during login:', error);
        });
        
      }
    
    return <div> 
    <NavBar x="program"/>
    <div class="homepage-content">
    <div class="homepage-content-txt">
        {/* <select name="" id="" class="select-course">
            <option value="">Change Course</option>
            <option value="">CSE 5335</option>
            <option value="">CSE 5338</option>
            <option value="">CSE 6363</option>
        </select><br /> */}
        
        <div class="sub-content-txt">
            <b>Student Name: </b> {userData.Name}
            <br /><b>Email: </b> {userData.Name}@mavs.uta.edu
            <br /><b>ID: </b>{studentId} <br /><br />
            <div class="performance-label">
                <div class="perf"><b>Performance:</b></div>
                <div class="grades">Total Grade: <b>A</b></div>
            </div>
        </div>
        <table class="performance-table">
            <tr>
                <th class="table-head">Exam</th>
                <th class="table-head">Score</th>
            </tr>
            <tr>
                <td class="table-row-1">Exam1</td>
                <td class="table-row-1">{Math.floor(Math.random()*100)}/100</td>
            </tr>
            <tr>
                <td class="table-row-2">Exam2</td>
                <td class="table-row-2">{Math.floor(Math.random()*100)}/100</td>
            </tr>
            <tr>
                <td class="table-row-1">Exam3</td>
                <td class="table-row-1">{Math.floor(Math.random()*100)}/100</td>
            </tr>
            <tr>
                <td class="table-row-2">Exam4</td>
                <td class="table-row-2">{Math.floor(Math.random()*100)}/100</td>
            </tr>
        </table>
    </div>
</div>
</div>;
}

export default ViewPerformance;