import React from 'react';
import './PleaseLogin.css'; // Import the CSS file for styling
import { useNavigate } from 'react-router-dom';
var PleaseLogin = () => {
  const navigate = useNavigate();
  const navigateToLogin = () => navigate("/login");
  return (
    <div class="please-login-container">
        <p>Please login to continue...</p>
        <button onClick={navigateToLogin}>
            Login
        </button>
    </div>  );
};

export default PleaseLogin;