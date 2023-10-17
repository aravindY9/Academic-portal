// import NavBar from "../UniversalComponents/NavBar";
import "./index.css";
import { Link } from "react-router-dom";

// import Header from './components/UniversalComponents/Header';

function App() {
  return (
    <body>
      <nav>
        <div class="navbar-services">
          <Link to="/index" className="logo-index">
            Mav Program
          </Link>

          <div class="login-btn-services">
          <Link to="/login" class="login-btn-txt-about">
              Login
            </Link>
          </div>
        </div>
      </nav>
      <div class="college-banner-services">
        <div class="student-login-txt">OUR SERVICES</div>
      </div>
      <div class="sub-content-txt-2">
        Welcome to our college's student portal, your hub for all things
        academic and campus-related. Explore services for courses, grades,
        financial aid, student life, careers, and instructor tools. It's your
        24/7 resource to enhance your college experience.
      </div>
      <div class="sub-content-txt-1-services">STUDENT SERVICES</div>
      <div class="homepage-content-services">
        <div class="homepage-content-txt-services">
          Grades
          <div class="sub-content-txt">
            Access to current and past grades, as well as the ability to request
            official transcripts.
          </div>
        </div>
        <div class="homepage-content-txt-services">
          Financial Aid
          <div class="sub-content-txt">
            Information on scholarships, grants, loans, and the ability to check
            the status of financial aid applications.
          </div>
        </div>
        <div class="homepage-content-txt-services">
          Course Materials
          <div class="sub-content-txt">
            Access to course materials such as syllabi, lecture notes, and
            required textbooks.
          </div>
        </div>
      </div>
      <div class="homepage-content-services">
        <div class="homepage-content-txt-services">
          Announcements
          <div class="sub-content-txt">
            Stay updated with assessments, important announcements given by the
            instructor.
          </div>
        </div>
        <div class="homepage-content-txt-services">
          Feedback
          <div class="sub-content-txt">
            Provide feedback on courses and campus services through surveys and
            evaluations.
          </div>
        </div>
        <div class="homepage-content-txt-services">
          Class Registration
          <div class="sub-content-txt">
            Students can enroll in courses, view class schedules, and check seat
            availability.
          </div>
        </div>
      </div>
      <div class="sub-content-txt-1-services">FACULTY/STAFF SERVICES</div>
      <div class="homepage-content-services">
        <div class="homepage-content-txt-services">
          Material Upload
          <div class="sub-content-txt">
            Instructors can upload course syllabi, lecture notes, assignments,
            for students to access.
          </div>
        </div>
        <div class="homepage-content-txt-services">
          Grade Submission
          <div class="sub-content-txt">
            Instructors can submit grades for their courses electronically, and
            students can view their grades.
          </div>
        </div>
        <div class="homepage-content-txt-services">
          Communication Tools
          <div class="sub-content-txt">
            Instructors can send announcements, emails, and messages to their
            students through the portal.
          </div>
        </div>
      </div>
      <div class="homepage-content-services">
        <div class="homepage-content-txt-services">
          Discussion Forums
          <div class="sub-content-txt">
            Instructors can create discussion forums for class discussions, Q&A,
            and collaborative projects.
          </div>
        </div>
        <div class="homepage-content-txt-services">
          Course Evaluation
          <div class="sub-content-txt">
            Instructors can access course evaluation results and feedback from
            students.
          </div>
        </div>
        <div class="homepage-content-txt-services">
          Assessment Tools
          <div class="sub-content-txt">
            Instructors create and administer exams through the portal, and
            students can access results.
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <footer>
        <div class="footer-index">
          <div class="footer-1">
            © Copyright 2023 Group 24. All rights reserved.
          </div>
          <Link to="/services" className="footer-margin">
            Our Services
          </Link>
          <Link to="/about" className="footer-margin">
            About Us
          </Link>
          <Link to="/contact" className="footer-margin">
            Contact Us
          </Link>
        </div>
      </footer>
    </body>
  );
}

export default App;
