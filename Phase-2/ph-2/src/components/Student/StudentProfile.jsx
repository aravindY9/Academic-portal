import NavBar from "../UniversalComponents/NavBar";
import "./StudentProfile.css";

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
        <div>
          <b>Name:</b> Adam John <br />
          <b>StudentID:</b> 1002937446 <br />
          <b>Email:</b> asj2389@mavs.uta.edu <br />
          <b>Course:</b> Masters
          <br />
          <br />
          <b>Update Details:</b>
          <br />
          <input
            type="text"
            placeholder="Enter Phone Number"
            className="updateInput"
          /> <br />
          <textarea
            name=""
            id=""
            placeholder="Enter Address"
            cols="30"
            rows="10"
            className="updateTextArea"
          ></textarea>
          <br />
          <button className="submitButton"> Save</button>
        </div>

      </div>
    </div>
  );
}

export default App;
