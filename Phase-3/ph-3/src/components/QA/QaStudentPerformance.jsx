import NavBar from "../UniversalComponents/NavBar";
import Table from "../UniversalComponents/Table";
import "../Instructor/InstructorStyle.css";
import React, { useEffect, useState } from "react";
import { useParams,useNavigate } from "react-router-dom";
// import Header from './components/UniversalComponents/Header';

function App() {
  const { studentId } = useParams();
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
  const [grades, setgrades] = useState([{}]) 
  const [error, setError] = useState(null);
    // console.log(userId);
    useEffect(() => {
        // Fetch user data using the 'userId' parameter
        fetch(`http://localhost/A/QA/fetchUserData.php?id=${studentId}`, {
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
                // Set the fetched user data in the state
                console.log(data[0]);
                setUserData(data[0]);
            })
            .catch((error) => console.log(error));
    }, [studentId]);

    fetch(`http://localhost/A/student/studentgrades.php?id=${studentId}`, {
      method:"POST",
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
                // Set the fetched user data in the state
                // console.log("fdd",data);  
                setgrades(data);
            })
            .catch((error) => console.log(error));

    // console.log(studentId);
    if (error) {
      // Handle the error condition, e.g., server is down
      return <div>Access Denied: Server is not responding.</div>;
    }

    const submitFeedback =  () =>{
      const id = studentId;
      const content = feedback.content;
      console.log(JSON.stringify({id, content}));
      fetch('http://localhost/QA/submitFeedback.php', {
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
  return (
    <div className="mainBody">
      <div className="pageFormat">
        <NavBar x="qanav" />
      </div>
        <br />
      <div className="studentBody">
        <div className="subContentTxt">
          
          
          <b>Student Name: </b> {userData.Name}
          <br />
         
          <b>StudentID: </b>{userData.StudentID}
          <br />
          <br />
          <div className="grades">
            Total Grade: <b>A</b>
          </div>
          <table className="ih-table">
            <tr>
              <th className="ih-th">Exam Name</th>
              <th className="ih-th">Grade</th>
            </tr>
            {grades.map((data)=>{
                return <tr>
                  <td class="table-row-1">{data.examName}</td>
                  <td class="table-row-1">{data.Grade}/100</td>
              </tr>
              })}
              
          </table>
          <br />
          Provide Feedback: <br />
          <textarea name="" id="" cols="30" rows="10" className="ih-txtarea" placeholder="Enter Feedback" maxLength={512} value={feedback.content} onChange={(e) => setFeedback({ ...feedback, content: e.target.value })}></textarea><br />
          <button onClick={submitFeedback}>Submit Feedback</button>
        </div>
      </div>
    </div>
  );
}

export default App;
