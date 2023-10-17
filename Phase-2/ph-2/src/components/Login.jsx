import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function App() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (email === 'bruce@gmail.com' && password === 'password123') {
      navigate('/admin');
    } else if (email === 'clark@gmail.com' && password === 'password123'){
      navigate("/student");
      
    }else if (email === 'diana@gmail.com' && password === 'password123'){
      navigate("/instructor");
    }else if (email === 'blue@gmail.com' && password === 'password123'){
      navigate("/program");
    }else if (email === 'tony@gmail.com' && password === 'password123'){
      navigate("/qa");
    }else{
        alert('Invalid email or password');
    }
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

