import React from 'react';
import StudentCourses from './components/Student/StudentCourses';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProfilePage from './components/Admin/ProfilePage';
import ChatPage from './components/Admin/ChatPage';
import AccountPage from './components/Admin/AccountPage';
import CoursePage from './components/Admin/CoursesPage';
import HomePage from './components/Admin/HomePage';
import StudentHome from './components/Student/StudentHome';
import EditCourses from './components/Admin/EditCourses';
import EditAccount from './components/Admin/EditAccount';

import StudentFeedback from './components/Student/StudentFeedback';
import StudentCourse from './components/Student/StudentCourses';
import StudentExams from './components/Student/StudentExams';
import StudentChat from './components/Student/StudentChat';
import StudentProfile from './components/Student/StudentProfile';
import StudentAssignment from './components/Student/StudentAssignment';

import InstructorChat from './components/Instructor/InstructorChat';
import InstructorCourse from './components/Instructor/InstructorCourse';
import InstructorCreateAssignment from './components/Instructor/InstructorCreateAssignment';
import InstructorCreateCourse from './components/Instructor/InstructorCreateCourse';
import InstructorCreateExam from './components/Instructor/InstructorCreateExam';
import InstructorEditAssignment from './components/Instructor/InstructorEditAssignment';
import InstructorEditExam from './components/Instructor/InstructorEditExam';
import InstructorGradeStudent from './components/Instructor/InstructorGradeStudent';
import InstructorHome from './components/Instructor/InstructorHome';
import InstructorProfile from './components/Instructor/InstructorProfile';
import InstructorStudents from './components/Instructor/InstructorStudents';
// import StudentChat from './components/Student/StudentChat';
// import


function App() {
  // console.log(process.env.REACT_APP_BASE_URL);
  return (
    <BrowserRouter>
      <Routes>
      {/* Admin Routes */}
      <Route path="/admin" element={<HomePage />} />
        <Route path="/admin/profile" element={<ProfilePage />} />
        <Route path="/admin/chat" element={<ChatPage />} />
        <Route path="/admin/accounts" element={<AccountPage />} />
        <Route path="/admin/course" element={<CoursePage />} />
        <Route path="/admin/editcourse" element={<EditCourses />} />
        <Route path="/admin/editaccount" element={<EditAccount />} />
        {/* Student Routes */}
        <Route path="/Student/" element={<StudentHome/>} />
        <Route path="/Student/StudentCourses" element={<StudentCourse/>} />
        <Route path="/Student/StudentExams" element={<StudentExams/>} />
        <Route path="/Student/StudentFeedback" element={<StudentFeedback/>} />
        <Route path="/Student/StudentChat" element={<StudentChat/>} />
        <Route path="/Student/StudentProfile" element={<StudentProfile/>} />
        <Route path="/Student/StudentAssignment" element={<StudentAssignment/>} />

        {/* Instructor Routes */}
        <Route path="/Instructor/" element={<InstructorHome/>} />
        <Route path="/Instructor/Courses" element={<InstructorCourse/>} />
        <Route path="/instructor/CreateExams" element={<InstructorCreateExam/>} />
        <Route path="/Instructor/editExam" element={<InstructorEditExam/>} />
        <Route path="/Instructor/createAssignment" element={<InstructorCreateAssignment/>} />
        <Route path="/Instructor/editAssignment" element={<InstructorEditAssignment/>} />
        <Route path="/Instructor/gradeStudent" element={<InstructorGradeStudent/>} />
        <Route path="/Instructor/chat" element={<InstructorChat/>} />
        <Route path="/Instructor/createCourse" element={<InstructorCreateCourse/>} />
        <Route path="/Instructor/profile" element={<InstructorProfile/>} />
        <Route path="/Instructor/Student" element={<InstructorStudents/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
