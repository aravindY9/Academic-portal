import NavBar from "../UniversalComponents/NavBar";
import Forms from "../UniversalComponents/Forms";
import "./StudentFeedback.css";
import React, { useEffect, useState } from "react";
// import Header from './components/UniversalComponents/Header';

function App() {
  const [feedback, setFeedback] = useState([{
    ID:"",
    FEEDBACK:""
  }
  ]);
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);
  const savedata = (data) =>{
      return data;
  }
  useEffect(() => {
    fetch("http://localhost/A/student/fetchfeedback.php", {
      credentials: 'include',
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error(`Response status is not 200: ${response.status}`);
        }
      })
      .then((fetchedData) => {
        const savedData = savedata(fetchedData); // Use the savedata function
        setData(savedData); // Save the modified or unmodified data in the state variable
      })
      .catch((error) => {
        setError(error); // Handle errors as needed
      });
  }, []);
  const submitFeedback =  () =>{
    const id = feedback.id;
    const content = feedback.content;
    console.log(JSON.stringify({id, content}));
    fetch('http://localhost/A/QA/submitFeedback.php', {
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
    <div className="sfe-mainBody">
      <div className="pageFormat">
        <NavBar x="indexNav" />
      </div>
      <br />
      <br />
      <div className="studentBody">
        <div class="course-obj">
          Your Feedback:
          <div class="course-obj-txt">
          <ol>
          {data.map((item) => (
          <li key={item.id}> 
            {item.FEEDBACK}
          </li>
        ))}
          </ol>
          </div>
        </div>
        Provide Feedback: <br />
          <input type="number" placeholder="Enter ID" className="formInput" value={feedback.ID} onChange={(e) => setFeedback({ ...feedback, ID: e.target.value })}/>
          <textarea name="" id="" cols="30" rows="10" className="ih-txtarea" placeholder="Enter Feedback" maxLength={512} value={feedback.FEEDBACK} onChange={(e) => setFeedback({ ...feedback, FEEDBACK: e.target.value })}></textarea><br />
          <button onClick={submitFeedback}>Submit Feedback</button>
      </div>
    </div>
  );
}

export default App;
