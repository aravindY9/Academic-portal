// import NavBar from "../UniversalComponents/NavBar";
import "./index.css";
import { Link } from "react-router-dom";

// import Header from './components/UniversalComponents/Header';

function App() {
  return (
    <body>
      <nav>
        <div class="navbar-contact">
          <Link to="/" className="logo-index">
            Mav Program
          </Link>

          <div class="login-btn-contact">
          <Link to="/login" class="login-btn-txt-about">
              Login
            </Link>
          </div>
        </div>
      </nav>
      <div class="college-banner-contact">
        <div class="student-login-txt">CONTACT US</div>
      </div>
      <div class="homepage-content-contact">
        <div class="homepage-content-txt-contact">
          Phone
          <div class="sub-content-txt">+1 (563) 275-XXXX</div>
          Email
          <div class="sub-content-txt">contact@abc.edu</div>
          Address
          <div class="sub-content-txt">
            ABC College 123 College Lane Fictionville, FCT 98765 Imaginaryland
          </div>
        </div>
        <div>
          <form action="" class="contact-form">
            <input
              type="text"
              placeholder="Enter your name"
              class="contact-input"
            />
            <input
              type="text"
              placeholder="Enter your email"
              class="contact-input"
            />
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              class="contact-input"
              placeholder="Enter your message"
            ></textarea>
            <button class="contact-input-btn">Submit</button>
          </form>
        </div>
      </div>
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
