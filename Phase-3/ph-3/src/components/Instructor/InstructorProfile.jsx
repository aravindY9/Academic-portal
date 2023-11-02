import NavBar from "../UniversalComponents/NavBar";
import "./InstructorStyle.css";

// import Header from './components/UniversalComponents/Header';

function App() {
  return (
    <div className="ip-mainBody">
      <div className="pageFormat">
        <NavBar x="instructorNav" />
      </div>
      <br />
      <br />
      <div className="studentBody">
        <div>
          <b>Name:</b> Adam John <br />
          <b>InstructorID:</b> 1002937446 <br />
          <b>Email:</b> asj2389@mavs.uta.edu <br />
          <br />
          <br />
          <b>Update Details:</b>
          <br />
          <input
            type="text"
            placeholder="Enter Phone Number"
            className="ip-updateInput"
          /> <br />
          <textarea
            name=""
            id=""
            placeholder="Enter Address"
            cols="30"
            rows="10"
            className="ip-updateTextArea"
          ></textarea>
          <br />
          <button className="ip-submitButton"> Save</button>
        </div>

      </div>
    </div>
  );
}

export default App;
