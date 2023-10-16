// import NavBar from "../UniversalComponents/NavBar";
import "./login.css";
// import Header from './components/UniversalComponents/Header';

function App() {
  return (
    <body>
      <div class="navbar">
        <a href="index.html" class="logo">
          Mav Program
        </a>
      </div>

      <div class="login-container">
        <div class="form-group">
          <input type="text" placeholder="Email" id="username" name="Email" />
          <br />
          <input
            type="password"
            placeholder="Password"
            id="Email"
            name="Password"
          />
          <br />
          <button>
            <a href="selectUser.html">Sign In</a>
          </button>
          <br />
          <a href="signUp.html">
            New User? <b>Create Account</b>
          </a>
          <br />
          <p>
            <a href="forgot.html" class="fgp">
              Forgot password?
            </a>
          </p>
        </div>
      </div>
    </body>
  );
}

export default App;
