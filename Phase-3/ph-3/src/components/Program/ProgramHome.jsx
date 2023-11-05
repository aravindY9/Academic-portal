import React from "react";
import NavBar from "../UniversalComponents/NavBar";
import "./ProgramHome.css"
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams,useNavigate } from "react-router-dom";

function ProgramHome(){

    const [accountData, setAccountData] = useState([]);
  const [error, setError] = useState(null);
  useEffect(() => {
      fetch("http://localhost/A/ProgramCoordinator/api.php", {
        credentials: 'include',
      })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error(`Response status is not 200: ${response.status}`);
        }
      })
          .then((data) => setAccountData(data))
          .catch((error) => setError(error));
  }, []);
  if (error) {
    // Handle the error condition, e.g., server is down
    return <div>Access Denied: Server is not responding.</div>;
  }
  
    return <div>
    <div>  
    <NavBar x="program"/>
    <div className="homepage-content-program">
    <div className="homepage-content-program-txt"> 
        Send Notification  
        <div className="sub-content-txt">
            <textarea name="" id="" cols="30" rows="10" placeholder="Enter message" className="text-inp"></textarea>
            <input type="text" placeholder="Enter email" className="text-inp" /> 
            <button className="send-btn">Send</button>
        </div>
    </div>
    <div className="homepage-content-program-txt"> 
        View Student Performance
        <div className="sub-content-txt">
            <input type="text" placeholder="Enter student ID" className="text-inp" />  
            {/* <div className="student-list">
                <li className="student-list-item"><a href="/program/viewperformance" className="student-list-item">Student 1</a></li>
                <li className="student-list-item"><a href="/program/viewperformance" className="student-list-item">Student 2</a></li>
                <li className="student-list-item"><a href="/program/viewperformance" className="student-list-item">Student 3</a></li>
                <li className="student-list-item"><a href="/program/viewperformance" className="student-list-item">Student 4</a></li>

            </div>         */}
            {accountData.map(function mapentries(data) {
              console.log(data);
                        return (
                            
                                <tr>
                                <td className="ih-td">
                                  <p>{data.Name}</p>
                                </td>
                                <td className="ih-td">
                                  <p>{data.StudentID}</p>
                                </td>
                                <td className="ih-td">
                                  <Link to={`/Program/viewperformance/${data.StudentID}`}>View</Link>
                                </td>
                              </tr>

                            );
                    })}
        </div>
    </div>
</div>
</div>
</div>;
}

export default ProgramHome;