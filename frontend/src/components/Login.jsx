import React, { useState } from 'react';
import axios from 'axios';
import image from "../images/g2.jpg";
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setemail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.post("https://college-blog-seven.vercel.app/Login", {
        email,
        password,
      });

      if(response){
        if(response.errors){
          // const {email,password}=response.errors;
          // if(email) setError('not in database-email')
          // else if(password)  setError('not in database-pass')
              console.log("nhiiiii");
        }
        else{
              localStorage.setItem('token',response.data.token);
              navigate("/");
              console.log("sachin yes ")
              
      }
    }} catch (error) {
      console.error('Error during login:', error);
      setError('An unexpected error occurred');
    }
  };

  return (
    <div className='lo'>
      <div className='magma'>
        {/* You might want to remove or uncomment this block */}
        {/* <video autoPlay loop muted >
          <source src={image} type="video/mp4" />
        </video> */}
        {/* <img src={image} alt="Background" /> */}
        {/* <h>MAGMA TWEETS</h> */}
      </div>
      <div className="magma2" style={styles.container}>
        {/* <b><h>MAGMA TWEETS</h></b> */}
        <div className="magma3" style={styles.form}>
          <h2 style={styles.heading}>MAGMA</h2>
          <label style={styles.label}>
            Username:
            <input
              type="text"
              style={styles.input}
              value={email}
              onChange={(e) => setemail(e.target.value)}
            />
          </label>
          <label style={styles.label}>
            Password:
            <input
              type="password"
              style={styles.input}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <button style={styles.button} onClick={handleLogin}>
            Log in
          </button>
          {error && <p style={styles.error}>{error}</p>}
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  },
  form: {
    maxWidth: '400px',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#fff',
  },
  heading: {
    textAlign: 'center',
    marginBottom: '20px',
    color: '#333',
  },
  label: {
    display: 'block',
    marginBottom: '10px',
    color: '#555',
  },
  input: {
    width: '100%',
    padding: '8px',
    boxSizing: 'border-box',
    marginBottom: '10px',
    borderRadius: '4px',
    border: '1px solid #ccc',
  },
  button: {
    width: '100%',
    padding: '10px',
    backgroundColor: '#4caf50',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  error: {
    color: 'red',
    marginTop: '10px',
    textAlign: 'center',
  },
};

export default Login;
