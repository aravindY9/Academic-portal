import NavBar from "../UniversalComponents/NavBar";
import "../Instructor/InstructorStyle.css";
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
            <tr>
              <td className="ih-td">
                <p>Liam Wilson</p>
              </td>
              <td className="ih-td">
                <p>1003987654</p>
              </td>
              <td className="ih-td">CSE5335</td>
              <td className="ih-td">
                <p>A</p>
              </td>
              <td className="ih-td">
                <Link to="/qa/studentperformance">View</Link>
              </td>
            </tr>
            <tr>
              <td className="ih-td">
                <p>Sophia Patel</p>
              </td>
              <td className="ih-td">
                <p>1006214875</p>
              </td>
              <td className="ih-td">CSE5335</td>
              <td className="ih-td">
                <p>B</p>
              </td>

              <td className="ih-td">
                <Link to="/qa/studentperformance">View</Link>
              </td>
            </tr>
            <tr>
              <td className="ih-td">
                <p>Ethan Ramirez</p>
              </td>
              <td className="ih-td">
                <p>1005392168</p>
              </td>
              <td className="ih-td">CSE5335</td>
              <td className="ih-td">
                <p>D</p>
              </td>

              <td className="ih-td">
                <Link to="/qa/studentperformance">View</Link>
              </td>
            </tr>
            <tr>
              <td className="ih-td">
                <p>Olivia Anderson</p>
              </td>
              <td className="ih-td">
                <p>1008745923</p>
              </td>
              <td className="ih-td">CSE5335</td>
              <td className="ih-td">
                <p>B</p>
              </td>

              <td className="ih-td">
                <Link to="/qa/studentperformance">View</Link>
              </td>
            </tr>
            <tr>
              <td className="ih-td">
                <p>Sophia Patel</p>
              </td>
              <td className="ih-td">
                <p>1006214875</p>
              </td>
              <td className="ih-td">CSE5335</td>
              <td className="ih-td">
                <p>B</p>
              </td>

              <td className="ih-td">
                <Link to="/qa/studentperformance">View</Link>
              </td>
            </tr>
            <tr>
              <td className="ih-td">
                <p>Ethan Ramirez</p>
              </td>
              <td className="ih-td">
                <p>1005392168</p>
              </td>
              <td className="ih-td">CSE5335</td>
              <td className="ih-td">
                <p>D</p>
              </td>

              <td className="ih-td">
                <Link to="/qa/studentperformance">View</Link>
              </td>
            </tr>
            <tr>
              <td className="ih-td">
                <p>Olivia Anderson</p>
              </td>
              <td className="ih-td">
                <p>1008745923</p>
              </td>
              <td className="ih-td">CSE5335</td>
              <td className="ih-td">
                <p>B</p>
              </td>

              <td className="ih-td">
                <a href="studentProgressDetails.html">view</a>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;
