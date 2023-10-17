// import NavBar from "../UniversalComponents/NavBar";
import "./login.css";
import { Link } from "react-router-dom";

// import Header from './components/UniversalComponents/Header';

function App() {
  return (
    <body>
      <div class="navbar">
        <a href="index.html" class="logo">
          Mav Program
        </a>
      </div>

        <form class="signup-container">
          <div class="signup-form-group">
            <input
              type="text"
              placeholder="First Name"
              id="FirstName"
              name="Name"
              required
            />{" "}
            <br />
            <input
              type="text"
              placeholder="Last Name"
              id="LastName"
              name="Name"
              required
            />
            <input
              type="text"
              placeholder="Email"
              id="Email"
              name="Email"
              required
            />
            <input
              type="text"
              placeholder="UTA ID"
              id="UTAID"
              name="Email"
              required
            />
            <input
              type="Text"
              placeholder="Password"
              id="password"
              name="password"
              required
            />
            <input
              type="Text"
              placeholder="Re-enter Password"
              id="password"
              name="password"
              required
            />
          </div>
          <div class="name-form-group">
            <button type="submit">Sign Up</button>
            <a href="login.html">
              <p>
                Already Having an Account?{" "}
                <b>
                  <u><Link to="/login">
              Login
            </Link></u>
                </b>
              </p>
            </a>
          </div>
        </form>
    </body>
  );
}

export default App;
