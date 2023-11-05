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
import CreateUser from './components/Admin/createUser';
import CreateCourse from './components/Admin/createCourse';

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

import Index from './components/index';
import Login from './components/Login';
import Signup from './components/SignUp';
import Password from './components/ForgotPassword';
import About from './components/AboutUs';
import Services from './components/OurServices';
import Contact from './components/ContactUs';
import Navigate from './components/Navigate';
import Signout from './components/signout'

import ProgramHome from './components/Program/ProgramHome';
import ProgramProfile from './components/Program/ProfilePage';
import ProgramCourse from './components/Program/InstructorHome';
import ProgramChat from './components/Program/ChatPage';
import ProgramViewPerformance from './components/Program/ViewPerformance';

import QAHome from './components/QA/QaHome';
import QAChat from './components/QA/QaChat';
import QACourseDetails from './components/QA/QaCourseDetails';
import QACourses from './components/QA/QaCourses';
import QAProfile from './components/QA/QaProfile';
import QAStudentPerformance from './components/QA/QaStudentPerformance';
import QAStudents from './components/QA/QaStudents';
// import Blog from 'https://axy2996.uta.cloud/uncategorized/disadvantage/';

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
        <Route path="/admin/editcourse/:courseId" element={<EditCourses />} />
        <Route path="/admin/editaccount/:userId" element={<EditAccount />} />
        <Route path="/admin/createuser" element={<CreateUser />} />
        <Route path="/admin/createcourse" element={<CreateCourse />} />

        
        {/* Student Routes */}
        <Route path="/Student/" element={<StudentHome/>} />
        <Route path="/Student/StudentCourses" element={<StudentCourse/>} />
        <Route path="/Student/StudentExams/:courseID" element={<StudentExams/>} />
        <Route path="/Student/StudentFeedback" element={<StudentFeedback/>} />
        <Route path="/Student/StudentChat" element={<StudentChat/>} />
        <Route path="/Student/StudentProfile" element={<StudentProfile/>} />
        <Route path="/Student/StudentAssignment" element={<StudentAssignment/>} />

         {/* Instructor Routes */}
         <Route path="/Instructor/" element={<InstructorHome/>} />
        <Route path="/Instructor/Courses/:courseID" element={<InstructorCourse/>} />
        <Route path="/instructor/CreateExams" element={<InstructorCreateExam/>} />
        <Route path="/Instructor/editExam" element={<InstructorEditExam/>} />
        <Route path="/Instructor/createAssignment" element={<InstructorCreateAssignment/>} />
        <Route path="/Instructor/editAssignment" element={<InstructorEditAssignment/>} />
        <Route path="/Instructor/gradeStudent/:studentID" element={<InstructorGradeStudent/>} />
        <Route path="/Instructor/chat" element={<InstructorChat/>} />
        <Route path="/Instructor/createCourse" element={<InstructorCreateCourse/>} />
        <Route path="/Instructor/profile" element={<InstructorProfile/>} />
        <Route path="/Instructor/Student" element={<InstructorStudents/>} />

        {/* Index Routes */}
        <Route path="/" element={<Index/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/services" element={<Services/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup/>} />
        <Route path='/password' element={<Password/>} />
        <Route path='/navigate' element={<Navigate/>} />
        <Route path='/signout' element={<Signout/>} />

        {/* Program Coordinator Routes */}
        <Route path="/program" element={<ProgramHome />} />
        <Route path="/program/profile" element={<ProgramProfile />} />
        <Route path="/program/chat" element={<ProgramChat />} />
        <Route path="/Program/course" element={<ProgramCourse />} />
        <Route path="/Program/viewperformance/:studentId" element={<ProgramViewPerformance />} />

        {/* QA Routes */}
        <Route path="/qa" element={<QAHome />} />
        <Route path="/qa/chat" element={<QAChat />} />
        <Route path="/qa/coursedetails/:courseID" element={<QACourseDetails />} />
        <Route path="/qa/course" element={<QACourses />} />
        <Route path="/qa/profile" element={<QAProfile />} />
        <Route path="/qa/studentperformance/:studentId" element={<QAStudentPerformance />} />
        <Route path="/qa/students" element={<QAStudents />} />
        {/* <Route path="/Blog" element={<Blog/>} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
