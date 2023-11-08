import React, { useContext, useState } from 'react';
import axios from 'axios';
import { primaryContext } from '../../components/context/primarycontext';
import { BrowserRouter as Router, Route, Link, useHistory } from 'react-router-dom';
import './index.css';

const SignInForm = () => {
  const { user, setUser } = useContext(primaryContext);
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });
  const history = useHistory();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/server/signin', formData); // Adjust the API endpoint as needed

      if (response.status === 200) {
        const loggedInUser = response.data;

        // Update the user context with the logged-in user data
        setUser(loggedInUser);

        // Redirect to a dashboard or home page after successful login
        history.push('/dashboard');
      } else {
        console.log('Login failed. Check credentials.');
      }
    } catch (error) {
      console.error(error);
    }
  };

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