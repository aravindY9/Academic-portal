import NavBar from "../UniversalComponents/NavBar";
import Forms from "../UniversalComponents/Forms";
import "./StudentFeedback.css";
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
        <Forms x="studentFeedback"/>
      </div>      
    </div>
  );
}

export default App;
