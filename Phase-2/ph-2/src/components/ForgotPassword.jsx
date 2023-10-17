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

      <form action="login.html" class="login-container">
        <div class="form-group">
          <input type="text" placeholder="Email" id="Email" name="Email" /><br /><br />

          <button type="submit">Send Email</button>
          <br />
          Remember Password? <Link to="/login">Login</Link>
        </div>
      </form>
    </body>
  );
}

export default App;
