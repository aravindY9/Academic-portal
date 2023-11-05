// import NavBar from "../UniversalComponents/NavBar";
import "./login.css";
// import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useParams,useNavigate,Link } from "react-router-dom";

// import Header from './components/UniversalComponents/Header';

function App() {
  const navigate = useNavigate()
  const [userData, setUserData] = useState({
    NAME: "",
    id: "",
    email: "",
    Password: "",
    Password2: "",
});
const upload = () => {
  // Define the updated user data
  const updatedUserData = {
      NAME: userData.NAME,
      id: userData.id,
      email: userData.email,
      Password: userData.Password,
      Password2: userData.Password2,
  };
  // console.log(JSON.stringify(updatedUserData));
  // Send a POST request to update the user data
  console.log(updatedUserData);
  fetch(`https://axv9331.uta.cloud/php/admin/inserttable.php`, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(updatedUserData),
  credentials: 'include',
})
.then((response) => {
  if (response.ok) {
    return response.json();
  } else {
    throw new Error('Network response was not ok');
  }
})
.then((data) => {
  // console.log(data);
  if (data === "Success") {
    // Handle a successful update
    alert(data);
    navigate("/login");
  }else {
    // Handle unexpected response
    alert(data.split(":")[2]);
  }
})
.catch((error) => {
  // Handle network or request errors
  console.error("Error updating user data:", error);
});


};

  return (
    <body>
      <div class="navbar">
        <a href="index.html" class="logo">
          Mav Program
        </a>
      </div>

        {/* <form class="signup-container"> */}
          <div class="signup-form-group">
            <input
              type="text"
              placeholder="Name"
              id="FirstName"
              name="Name"
              required
              onChange={(e) => setUserData({ ...userData, NAME: e.target.value })}
            />{" "}
            <br />
            <input
              type="text"
              placeholder="Email"
              id="Email"
              name="Email"
              required
              onChange={(e) => setUserData({ ...userData, email: e.target.value })}
            />
            <input
              type="text"
              placeholder="UTA ID"
              id="UTAID"
              name="id"
              required
              onChange={(e) => setUserData({ ...userData, id: e.target.value })}
            />
            <input
              type="password"
              placeholder="Password"
              id="password"
              name="password"
              required
              onChange={(e) => setUserData({ ...userData, Password: e.target.value })}
            />
            <input
              type="password"
              placeholder="Re-enter Password"
              id="password2"
              name="password2"
              onChange={(e) => setUserData({ ...userData, Password2: e.target.value })}
              required
            />
          </div>
          <div class="name-form-group">
            <button type="submit" onClick={upload}>Sign Up</button>
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
        {/* </form> */}
    </body>
  );
}

export default App;
