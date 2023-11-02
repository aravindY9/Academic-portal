import NavBar from "../UniversalComponents/NavBar";
import Forms from "../UniversalComponents/Forms";
import "./InstructorStyle.css";
// import Header from './components/UniversalComponents/Header';

function App() {
  return (
    <div className="sfe-mainBody">
      <div className="pageFormat">
        <NavBar x="instructorNav" />
      </div>
      <br />
      <br />
      <div className="studentBody">
        Enter new assignment details: <br />
        <input
          type="text"
          placeholder="Enter assignment name"
          className="ice-input"
        />
        <br />
        <input
          type="text"
          placeholder="Enter assignment link"
          className="ice-input"
        />
        <br />
        <input
          type="number"
          placeholder="Enter max score"
          className="ice-input"
        /> <br />
        <textarea name="" id="" cols="30" rows="10" className="ih-txtarea" placeholder="Enter Description"></textarea><br />
        <input
          type="date"
          placeholder="Enter exam date"
          className="ice-input"
        />
        <br />
        <br />
        <a href="" className="ic-createAssign">
          Update Assignment
        </a>
      </div>
    </div>
  );
}

export default App;
