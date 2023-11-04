import NavBar from "../UniversalComponents/NavBar";
import "../Instructor/InstructorStyle.css";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";

// import Header from './components/UniversalComponents/Header';

function App() {
  const [accountData, setAccountData] = useState([]);
  const [error, setError] = useState(null);
  useEffect(() => {
      fetch("http://localhost/QA/api.php", {
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
  
      
  


  return (
    <div className="stco-mainBody">
      <div className="pageFormat">
        <NavBar x="qanav" />
      </div>
      <br />
      <br />
      <div className="studentBody">
        <div className="stco-studentLabel">Search Students:</div>
        <input
          type="text"
          name="course-code"
          placeholder="Search StudentID (eg: 1000XXXXXX)"
          className="is-input"
        />
        <button type="submit" class="is-search">
          Search
        </button>
        <div className="stco-tableScroll">
          <table className="ih-table">
            <tr>
              <th className="ih-th">Name</th>
              <th className="ih-th">ID</th>
              <th className="ih-th">Course</th>
              <th className="ih-th">Grade</th>
              <th className="ih-th">Actions</th>
            </tr>
            
            {accountData.map(function mapentries(data) {
              console.log(data);
                        return (
                            
                                <tr>
                                <td className="ih-td">
                                  <p>{data.Name}</p>
                                </td>
                                <td className="ih-td">
                                  <p>{data.ID}</p>
                                </td>
                                <td className="ih-td">{data.Course}</td>
                                <td className="ih-td">
                                  <p>{data.Grade}</p>
                                </td>
                                <td className="ih-td">
                                  <Link to={`/qa/studentperformance/${data.ID}`}>View</Link>
                                </td>
                              </tr>

                            );
                    })}
          </table>
        </div>
      </div>
    </div>
  );



}


export default App;
