import React, { useContext, useState } from 'react';
import axios from 'axios';
import { primaryContext } from '../../components/context/primarycontext';
// import { BrowserRouter as Router, Route, Link, useHistory } from 'react-router-dom';
import './index.css';


const SignInForm = () => {
  const { user, setUser } = useContext(primaryContext);
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    try {
        const { username, password } = req.body;
    
        console.log('Received request with username:', username, 'and password:', password);
    
        // ... Rest of your sign-in logic
      } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal server error' });
      }
    };
    // e.preventDefault();
    // try {
    //   const response = await axios.post('/server/signin', formData);

    //   if (response.status === 200) {
    //     const loggedInUser = response.data;

    //     // Update the user context with the logged-in user data
    //     setUser(loggedInUser);

    //     // You can display a success message to the user or perform other actions here
    //     console.log('Login successful');
    //   } else {
    //     console.log('Login failed. Check credentials.');
    //   }
    // } catch (error) {
    //   console.error(error);
    // }
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input type="text" name="username" value={formData.username} onChange={handleChange} />
      </label>
      <label>
        Password:
        <input type="password" name="password" value={formData.password} onChange={handleChange} />
      </label>
      <button type="submit">Sign In</button>
    </form>
  );
};

export default SignInForm;