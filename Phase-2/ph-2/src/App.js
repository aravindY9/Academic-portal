import './App.css';
import React from 'react';
import { 
  BrowserRouter, 
  Routes, 
  Route, 
} from "react-router-dom"; 

import StudentFeedback from './components/Student/StudentFeedback';
import StudentHome from './components/Student/StudentHome';
import StudentCourse from './components/Student/StudentCourses';
import StudentExams from './components/Student/StudentExams';
// import StudentChat from './components/Student/StudentChat';
// import


function App() {
  // console.log(process.env.REACT_APP_BASE_URL);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Student/StudentHome" element={<StudentHome/>} />
        <Route path="/Student/StudentCourses" element={<StudentCourse/>} />
        <Route path="/Student/StudentExams" element={<StudentExams/>} />
        <Route path="/Student/StudentFeedback" element={<StudentFeedback/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
