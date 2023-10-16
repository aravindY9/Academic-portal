import NavBar from "../UniversalComponents/NavBar";
import "./InstructorStyle.css";
// import Header from './components/UniversalComponents/Header';

function App() {
  return (
    <div className="stco-mainBody">
      <div className="pageFormat">
        <NavBar x="instructorNav" />
      </div>
      <br />
      <br />
      <div className="studentBody">
        <div className="stco-studentLabel">Search Students:</div>
        <input
          type="text"
          name="course-code"
          placeholder="Search StudentID (eg: 1000XXXXXX)"
          className="stco-searchCourse"
        />
        <button type="submit" class="stco-search-button">
          Search
        </button>
        <div className="stco-tableScroll">
          <table>
            <tr>
              <th>Name</th>
              <th>ID</th>
              <th>Course</th>
              <th>Grade</th>
              <th>Actions</th>
            </tr>
            <tr>
              <td>
                <p>Liam Wilson</p>
              </td>
              <td>
                <p>1003987654</p>
              </td>
              <td>CSE5335</td>
              <td>
                <p>A</p>
              </td>
              <td>
                <a href="studentProgressDetails.html" class="edit">
                  view
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <p>Sophia Patel</p>
              </td>
              <td>
                <p>1006214875</p>
              </td>
              <td>CSE5335</td>
              <td>
                <p>B</p>
              </td>

              <td>
                <a href="studentProgressDetails.html" class="edit">
                  view
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <p>Ethan Ramirez</p>
              </td>
              <td>
                <p>1005392168</p>
              </td>
              <td>CSE5335</td>
              <td>
                <p>D</p>
              </td>

              <td>
                <a href="studentProgressDetails.html" class="edit">
                  view
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <p>Olivia Anderson</p>
              </td>
              <td>
                <p>1008745923</p>
              </td>
              <td>CSE5335</td>
              <td>
                <p>B</p>
              </td>

              <td>
                <a href="studentProgressDetails.html" class="edit">
                  view
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <p>Sophia Patel</p>
              </td>
              <td>
                <p>1006214875</p>
              </td>
              <td>CSE5335</td>
              <td>
                <p>B</p>
              </td>

              <td>
                <a href="studentProgressDetails.html" class="edit">
                  view
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <p>Ethan Ramirez</p>
              </td>
              <td>
                <p>1005392168</p>
              </td>
              <td>CSE5335</td>
              <td>
                <p>D</p>
              </td>

              <td>
                <a href="studentProgressDetails.html" class="edit">
                  view
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <p>Olivia Anderson</p>
              </td>
              <td>
                <p>1008745923</p>
              </td>
              <td>CSE5335</td>
              <td>
                <p>B</p>
              </td>

              <td>
                <a href="studentProgressDetails.html" class="edit">
                  view
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
