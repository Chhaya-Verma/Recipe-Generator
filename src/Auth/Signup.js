import React, { useState } from 'react';
import { auth, createUserWithEmailAndPassword } from "../firebase";
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './Signup.css'; // Importing the CSS

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState(''); // State for username
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Here you can update the user profile with the username
      await user.updateProfile({
        displayName: username,
      });

      // Redirect user to the login page after successful signup
      navigate('/login');
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-content">
        <div className="signup-form">
          <h2>Signup</h2>
          <form onSubmit={handleSignup}>
            <div className="input-group">
              <label>Username:</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                className="input-field"
              />
            </div>
            <div className="input-group">
              <label>Email:</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="input-field"
              />
            </div>
            <div className="input-group">
              <label>Password:</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="input-field"
              />
            </div>
            {error && <p className="error-message">{error}</p>}
            <button type="submit" className="submit-btn">Signup</button>
          </form>

          <div className="login-option">
            <p>Already have an account? <Link to="/login" className="login-link">Login here</Link></p>
          </div>
        </div>

        <div className="signup-image">
          <img
            src="https://static.vecteezy.com/system/resources/previews/003/689/224/non_2x/online-registration-or-sign-up-login-for-account-on-smartphone-app-user-interface-with-secure-password-mobile-application-for-ui-web-banner-access-cartoon-people-illustration-vector.jpg"
            alt="Signup Illustration"
            className="signup-img"
          />
        </div>
      </div>
    </div>
  );
};

export default Signup;
