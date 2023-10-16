// import NavBar from "../UniversalComponents/NavBar";
import "./index.css";
// import Header from './components/UniversalComponents/Header';

function App() {
  return (
    <body>
      <nav>
        <div class="navbar-index">
          <a href="#" class="logo-index">
            Mav Program
          </a>
        </div>
      </nav>
      <div class="college-banner-index">
        <div class="student-login-txt">MAV LOGIN</div>
      </div>
      <div class="homepage-content-index">
        <div class="homepage-content-txt-index">
          <b>Welcome to our course portal, where learning meets opportunity.</b>
          <br />
          <div class="sub-content-txt">
            Explore a world of knowledge and unlock your potential with our
            diverse range of courses.
          </div>
        </div>
        <br />
        <br />
        <div class="btn-frame">
          <div class="login-btn">
            <a href="login.html" class="login-btn-txt">
              Login
            </a>
          </div>
          <div class="login-btn">
            <a href="signUp.html" class="login-btn-txt">
              Signup
            </a>
          </div>
        </div>
      </div>
      <div class="homepage-content-2-index">
        <div class="homepage-content-2-txt-index"></div>
      </div>
      <br />
      <footer>
        <div class="footer-index">
          <div class="footer-1">
            © Copyright 2023 Group 24. All rights reserved.
          </div>
          <a href="services.html" class="footer-content">
            Our Services
          </a>
          <a href="aboutUs.html" class="footer-content">
            About Us
          </a>
          <a href="contactUs.html" class="footer-content">
            Contact Us
          </a>
        </div>
      </footer>
    </body>
  );
}

export default App;
