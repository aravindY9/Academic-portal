// import NavBar from "../UniversalComponents/NavBar";
import "./index.css";
// import Header from './components/UniversalComponents/Header';

function App() {
  return (
    <body>
      <nav>
        <div class="navbar-contact">
          <a href="index.html" class="logo-contact">
            Mav Program
          </a>
          <div class="login-btn-contact">
            <a href="login.html" class="login-btn-txt-contact">
              Login
            </a>
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
        <div class="footer-contact">
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
