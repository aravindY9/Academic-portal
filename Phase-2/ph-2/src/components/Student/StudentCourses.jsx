import NavBar from "../UniversalComponents/NavBar";
import "./StudentCourses.css";
// import Header from './components/UniversalComponents/Header';

function App() {
  return (
    <div className="mainBody">
      <div className="pageFormat">
        <NavBar x="indexNav" />
      </div>
      <br />
      <br />
      <div className="studentBody">
        <div className="studentLabel">Search Courses:</div>
        <input
          type="text"
          name="course-code"
          placeholder="Search course code (eg: CSE5301)"
        />
        <button type="submit" class="search-button">
          Search
        </button>
        <div className="tableScroll">
          <table>

            <tr>
              <th>Course</th>
              <th>Code</th>
              <th>Instructor</th>
              <th>Details</th>
            </tr>
            <tr>
              <td>
                <p>Information Security-1</p>
              </td>
              <td>
                <p>CSE5338</p>
              </td>
              <td>
                <p>Jane Doe</p>
              </td>
              <td>
                <a href="course_details.html" class="feedback-btn">
                  View
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <p>Web Data Management</p>
              </td>
              <td>
                <p>CSE5335</p>
              </td>
              <td>
                <p>Adam John</p>
              </td>
              <td>
                <a href="course_details.html" class="feedback-btn">
                  View
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <p>Artificial Intelligence-1</p>
              </td>
              <td>
                <p>CSE5301</p>
              </td>
              <td>
                <p>James May</p>
              </td>
              <td>
                <a href="course_details.html" class="feedback-btn">
                  View
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <p>Neural Networks</p>
              </td>
              <td>
                <p>CSE5368</p>
              </td>
              <td>
                <p>Ahmad Farood</p>
              </td>
              <td>
                <a href="course_details.html" class="feedback-btn">
                  View
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <p>Information Security-1</p>
              </td>
              <td>
                <p>CSE5338</p>
              </td>
              <td>
                <p>Jane Doe</p>
              </td>
              <td>
                <a href="course_details.html" class="feedback-btn">
                  View
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <p>Web Data Management</p>
              </td>
              <td>
                <p>CSE5335</p>
              </td>
              <td>
                <p>Adam John</p>
              </td>
              <td>
                <a href="course_details.html" class="feedback-btn">
                  View
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <p>Artificial Intelligence-1</p>
              </td>
              <td>
                <p>CSE5301</p>
              </td>
              <td>
                <p>James May</p>
              </td>
              <td>
                <a href="course_details.html" class="feedback-btn">
                  View
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <p>Neural Networks</p>
              </td>
              <td>
                <p>CSE5368</p>
              </td>
              <td>
                <p>Ahmad Farood</p>
              </td>
              <td>
                <a href="course_details.html" class="feedback-btn">
                  View
                </a>
              </td>
            </tr>
            
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;
