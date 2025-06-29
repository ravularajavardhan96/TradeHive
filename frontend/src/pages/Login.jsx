import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';

const Login = () => {
  const [inputValue, setInputValue] = useState({
    email: "",
    password: ""
  });

  const { email, password } = inputValue;

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue({ ...inputValue, [name]: value });
  };

  const handleError = (err) => {
    toast.error(err, { position: "bottom-left" });
  };

  const handleSuccess = (msg) => {
    toast.success(msg, { position: "bottom-right" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:3001/login",
        { ...inputValue },
        { withCredentials: true }
      );

      const { success, message, token } = data;

      if (success) {
        handleSuccess(message);
       if (token) {
          localStorage.setItem("token", token); 
          window.location.href = `dashboard-zerodhaclone.netlify.app?token=${token}`; 
}

      } else {
        handleError(message);
      }
    } catch (err) {
      console.log(err);
      handleError("Login failed. Try again.");
    }

    setInputValue({ email: "", password: "" });
  };

  return (
    <div className='h-100 d-flex align-items-center justify-content-center mt-5 p-5'>
      <div className='form_container p-5 mt-3'>
        <h2 className='text-primary'>Login</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor='email'>Email:</label>
            <input
              type='email'
              id='email'
              name='email'
              value={email}
              placeholder='Enter email'
              onChange={handleOnChange}
            />
          </div>
          <div>
            <label htmlFor='password'>Password:</label>
            <input
              type='password'
              id='password'
              name='password'
              value={password}
              placeholder='Enter password'
              onChange={handleOnChange}
            />
          </div>
          <div>
            <button type='submit' className='bg-primary'>Submit</button>
            <span className='mt-3'> New user? <Link to="/signup" className='text-primary'>Signup</Link></span>
          </div>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
};

export default Login;
