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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
