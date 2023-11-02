import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
function App() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Send a POST request to the PHP script for user authentication
    fetch('http://localhost/backend/login.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
      credentials: 'include',
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          // Successful login, navigate based on the role
          console.log(data.role.toLowerCase());
          if (data.role.toLowerCase() === 'student') {
            navigate('/student');
          } else if (data.role.toLowerCase() === 'instructor') {
            navigate('/instructor');
          } else if (data.role.toLowerCase() === 'admin') {
            navigate('/admin');
          }
        } else {
          // Invalid email or password
          alert('Invalid email or password');
        }
      })
      .catch((error) => {
        console.error('Error during login:', error);
      });
  }


  return (
    <div className="login-container">
      <div className="form-group">
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="log-input"
        />
        <br />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="log-input"
        />
        <br />
        <button onClick={handleLogin}>Sign In</button>
        <br />
        New User? <Link to="/signup"><b>Create Account</b></Link>
        <br />
        <p><Link to="/password" className="fgp">Forgot password?</Link></p>
      </div>
    </div>
  );
}

export default App;

