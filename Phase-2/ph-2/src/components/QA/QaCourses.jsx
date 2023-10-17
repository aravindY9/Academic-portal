import NavBar from "../UniversalComponents/NavBar";
import "../Student/StudentCourses.css"; 
import { Link } from "react-router-dom";

// import Header from './components/UniversalComponents/Header';

function App() {
  return (
    <div className="stco-mainBody">
      <div className="pageFormat">
        <NavBar x="qanav" />
      </div>
      <br />
      <br />
      <div className="studentBody">
        <div className="stco-studentLabel">View All Courses:</div>
        {/* <input
          type="text"
          name="course-code"
          placeholder="Search course code (eg: CSE5301)"
          className="stco-searchCourse"
        />
        <button type="submit" class="stco-search-button">
          Search
        </button> */}
        <br />
        <div className="stco-tableScroll">
        <table className="ih-table">
            <tr>
              <th className="ih-th">Course</th>
              <th className="ih-th">Course Code</th>
              <th className="ih-th">Number of Students</th>
              <th className="ih-th">Room Number</th>
              <th className="ih-th">Avg Grades</th>
              <th className="ih-th">Action</th>
            </tr>
            <tr>
              <td className="ih-td">
              <>Software Design Patterns</>
              </td>
              <td className="ih-td">
                <p>CSE5363</p>
              </td>
              <td className="ih-td">62</td>
              <td className="ih-td">NH100</td>
              <td className="ih-td">92.22%</td>
              <td className="ih-td">
                {" "}
                <Link to='/qa/coursedetails' className="ic-ViewButton">
                  View
                </Link>
              </td>
            </tr>
            <tr>
              <td className="ih-td">
              <>Cloud Computing</>
              </td>
              <td className="ih-td">
                <p>CSE5332</p>
              </td>
              <td className="ih-td">50</td>
              <td className="ih-td">ERB107</td>
              <td className="ih-td">87.23%</td>
              <td className="ih-td">
                {" "}
                <Link to='/qa/coursedetails' className="ic-ViewButton">
                  View
                </Link>
              </td>
            </tr>
            <tr>
              <td className="ih-td">
              <>Machine Learning</>
              </td>
              <td className="ih-td">
                <p>CSE6363</p>
              </td>
              <td className="ih-td">76</td>
              <td className="ih-td">SC203</td>
              <td className="ih-td">90.29%</td>
              <td className="ih-td">
                {" "}
                <Link to='/qa/coursedetails' className="ic-ViewButton">
                  View
                </Link>
              </td>
            </tr>
            <tr>
              <td className="ih-td">
              <>Software Design Patterns</>
              </td>
              <td className="ih-td">
                <p>CSE5363</p>
              </td>
              <td className="ih-td">62</td>
              <td className="ih-td">NH100</td>
              <td className="ih-td">92.22%</td>
              <td className="ih-td">
                {" "}
                <Link to='/qa/coursedetails' className="ic-ViewButton">
                  View
                </Link>
              </td>
            </tr>
            <tr>
              <td className="ih-td">
              <>Cloud Computing</>
              </td>
              <td className="ih-td">
                <p>CSE5332</p>
              </td>
              <td className="ih-td">50</td>
              <td className="ih-td">ERB107</td>
              <td className="ih-td">87.23%</td>
              <td className="ih-td">
                {" "}
                <Link to='/qa/coursedetails' className="ic-ViewButton">
                  View
                </Link>
              </td>
            </tr>
            <tr>
              <td className="ih-td">
              <>Machine Learning</>
              </td>
              <td className="ih-td">
                <p>CSE6363</p>
              </td>
              <td className="ih-td">76</td>
              <td className="ih-td">SC203</td>
              <td className="ih-td">90.29%</td>
              <td className="ih-td">
                {" "}
                <Link to='/qa/coursedetails' className="ic-ViewButton">
                  View
                </Link>
              </td>
            </tr>   
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;
