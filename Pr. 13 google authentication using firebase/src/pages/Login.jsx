import React from 'react';
import { signInWithPopup } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { auth, googleAuthProvider } from '../firebase';
import './Login.css';

const Login = () => {
  const navigate = useNavigate();
   const word = "Google";
  const colors = ["blue", "red", "yellow", "green"];

  const handleSubmit = async () => {
    try {
      let data = await signInWithPopup(auth, googleAuthProvider);
      navigate('/dashboard'); 
    } catch (err) {
      console.error('Error during sign-in: ', err);
      alert('Sign-in failed. Please try again.');
    }
  };

  return (
    <div className="login-container">
      <div className="login-content">
      <div className="google-word">
      {word.split('').map((letter, index) => (
        <span
          key={index}
          className={colors[index % colors.length]} 
        >
          {letter}
        </span>
      ))}
    </div>

        <button className="google-btn" onClick={handleSubmit}>
          <img
            src="src/assets/Google (2).png"
            alt="Google Logo"
            className="google-logo"
          />
          Sign in with Google
        </button>
      </div>
    </div>
  );
};

export default Login;
