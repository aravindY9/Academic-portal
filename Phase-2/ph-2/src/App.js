// import logo from './logo.svg';
import './App.css';
// import NavBar from './components/UniversalComponents/NavBar';
// import Header from './components/UniversalComponents/Header';
import StudentHome from './components/Student/StudentCourses';

function App() {
  
  return (
    <div className='mainBody'>
      {/* <Header /> */}
      {/* <div className='pageFormat'>
        <NavBar x="indexNav"/>
      </div> */}
      <StudentHome />
    </div>
    
  );
}

export default App;
