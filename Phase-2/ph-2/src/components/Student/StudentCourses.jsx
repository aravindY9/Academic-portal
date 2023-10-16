import NavBar from "../UniversalComponents/NavBar";
import "./StudentCourses.css";
// import Header from './components/UniversalComponents/Header';

function App() {
  return (
    <div className="stco-mainBody">
      <div className="pageFormat">
        <NavBar x="indexNav" />
      </div>
      <br />
      <br />
      <div className="studentBody">
        <div className="stco-studentLabel">Search Courses:</div>
        <input
          type="text"
          name="course-code"
          placeholder="Search course code (eg: CSE5301)"
          className="stco-searchCourse"
        />
        <button type="submit" class="stco-search-button">
          Search
        </button>
        <div className="stco-tableScroll">
          <table className="student-table-course">
            <tr>
              <th className="student-course-td-th">Course</th>
              <th className="student-course-td-th">Code</th>
              <th className="student-course-td-th">Instructor</th>
              <th className="student-course-td-th">Details</th>
            </tr>
            <tr>
              <td className="student-course-td-th">
                <p>Information Security-1</p>
              </td>
              <td className="student-course-td-th">
                <p>CSE5338</p>
              </td>
              <td className="student-course-td-th">
                <p>Jane Doe</p>
              </td>
              <td className="student-course-td-th">
                <a href="course_details.html" class="feedback-btn">
                  View
                </a>
              </td>
            </tr>
            <tr>
              <td className="student-course-td-th">
                <p>Web Data Management</p>
              </td>
              <td className="student-course-td-th">
                <p>CSE5335</p>
              </td>
              <td className="student-course-td-th">
                <p>Adam John</p>
              </td>
              <td className="student-course-td-th">
                <a href="course_details.html" class="feedback-btn">
                  View
                </a>
              </td>
            </tr>
            <tr>
              <td className="student-course-td-th">
                <p>Artificial Intelligence-1</p>
              </td>
              <td className="student-course-td-th">
                <p>CSE5301</p>
              </td>
              <td className="student-course-td-th">
                <p>James May</p>
              </td>
              <td className="student-course-td-th">
                <a href="course_details.html" class="feedback-btn">
                  View
                </a>
              </td>
            </tr>
            <tr>
              <td className="student-course-td-th">
                <p>Neural Networks</p>
              </td>
              <td className="student-course-td-th">
                <p>CSE5368</p>
              </td>
              <td className="student-course-td-th">
                <p>Ahmad Farood</p>
              </td>
              <td className="student-course-td-th">
                <a href="course_details.html" class="feedback-btn">
                  View
                </a>
              </td>
            </tr>
            <tr>
              <td className="student-course-td-th">
                <p>Information Security-1</p>
              </td>
              <td className="student-course-td-th">
                <p>CSE5338</p>
              </td>
              <td className="student-course-td-th">
                <p>Jane Doe</p>
              </td>
              <td className="student-course-td-th">
                <a href="course_details.html" class="feedback-btn">
                  View
                </a>
              </td>
            </tr>
            <tr>
              <td className="student-course-td-th">
                <p>Web Data Management</p>
              </td>
              <td className="student-course-td-th">
                <p>CSE5335</p>
              </td>
              <td className="student-course-td-th">
                <p>Adam John</p>
              </td>
              <td className="student-course-td-th">
                <a href="course_details.html" class="feedback-btn">
                  View
                </a>
              </td>
            </tr>
            <tr>
              <td className="student-course-td-th">
                <p>Artificial Intelligence-1</p>
              </td>
              <td className="student-course-td-th">
                <p>CSE5301</p>
              </td>
              <td className="student-course-td-th">
                <p>James May</p>
              </td>
              <td className="student-course-td-th">
                <a href="course_details.html" class="feedback-btn">
                  View
                </a>
              </td>
            </tr>
            <tr>
              <td className="student-course-td-th">
                <p>Neural Networks</p>
              </td>
              <td className="student-course-td-th">
                <p>CSE5368</p>
              </td>
              <td className="student-course-td-th">
                <p>Ahmad Farood</p>
              </td>
              <td className="student-course-td-th">
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
