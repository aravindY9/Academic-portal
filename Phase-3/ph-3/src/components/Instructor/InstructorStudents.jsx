import NavBar from "../UniversalComponents/NavBar";
import "./InstructorStyle.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams,useNavigate } from "react-router-dom";
 
// import Header from './components/UniversalComponents/Header';
 
function App() {
 
  
  const [accountData, setAccountData] = useState([]);
  const [error, setError] = useState(null);
  useEffect(($CODE) => {
      fetch(`http://localhost/A/InstructorPHP/students.php`, {
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
    console.log(error);
    // Handle the error condition, e.g., server is down
    return <div>Access Denied: Server is not responding.</div>;
  }
  console.log(accountData);
  return (
    <div className="">
      <div className="pageFormat">
        <NavBar x="instructorNav" />
      </div>
      <br />
      <br />
      <div className="studentBody">
        <div className="stco-studentLabel">View My Students:</div>
        {/* <input
          type="text"
          name="course-code"
          placeholder="Search StudentID (eg: 1000XXXXXX)"
          className="is-input"
        />
        <button type="submit" class="is-search">
          Search
        </button> */}
        <br />
        {/* <div className="stco-tableScroll"> */}
          <table className="ih-table">
            <tr>
              <th className="ih-th">Name</th>
              <th className="ih-th">ID</th>
              <th className="ih-th">Course</th>
              <th className="ih-th">Actions</th>
            </tr>
             {accountData.map((d)=>{
                return <tr>
              <td className="ih-td">
                <p>{d["0"].Name}</p>
              </td>
              <td className="ih-td">
                <p>{d["0"].StudentID}</p>
              </td>
              <td className="ih-td">{d.CODE}</td>
              <td className="ih-td">
                <Link to={`/Instructor/GradeStudent/${d["0"].StudentID}`}>View</Link>
              </td>
            </tr>
            })}
          </table>
        </div>
      </div>
    // </div>
  );
}
 
export default App;
 