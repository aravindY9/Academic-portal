// import NavBar from "../UniversalComponents/NavBar";
import "./index.css";
import { Link } from "react-router-dom";

// import Header from './components/UniversalComponents/Header';

function App() {
  return (
    <body>
      <nav>
        <div class="navbar-index">
          <Link to="/index" className="logo-index">
            Mav Program
          </Link>
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
            Check out our Blog <a href="https://axy2996.uta.cloud/#content" target="_blank">Here</a>
          </div>
        </div>
        <br />
        <br />
        <div class="btn-frame">
          <div class="login-btn">
            <Link to="/login" class="login-btn-txt-index">
              Login
            </Link>
          </div>
          <div class="login-btn">
            <Link to="/signup" class="login-btn-txt-index">
              Signup
            </Link>
          </div>
        </div>
        <br />
        <br />
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
