import React from 'react'
import axios from 'axios'
import { useState } from 'react';

const SignIn = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [frequency, setFrequency] = useState('');
  const [goals, setGoals] = useState('');
  const [levels, setLevels] = useState('');
  const [favorites, setFavorites] = useState('');

  const handleSignUp = async () => {
    try {
      const response = await axios.post('/server/signup', {
        username,
        password,
        name,
        frequency,
        goals,
        levels,
        favorites,
      });

      // Handle success, e.g., show a success message, redirect to the home page
    } catch (error) {
      // Handle error, e.g., show an error message
    }
  };

  const handleSignIn = async () => {
    try {
      const response = await axios.post('/server/signin', {
        username,
        password,
      });

      // Handle success, e.g., show a success message, redirect to the home page
    } catch (error) {
      // Handle error, e.g., show an error message
    }
  };

  return (
    <div>
      <h2>Sign In / Sign Up</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Frequency"
        value={frequency}
        onChange={(e) => setFrequency(e.target.value)}
      />
      <input
        type="text"
        placeholder="Goals"
        value={goals}
        onChange={(e) => setGoals(e.target.value)}
      />
      <input
        type="text"
        placeholder="Levels"
        value={levels}
        onChange={(e) => setLevels(e.target.value)}
      />
      <input
        type="text"
        placeholder="Favorites"
        value={favorites}
        onChange={(e) => setFavorites(e.target.value)}
      />
      <button onClick={handleSignIn}>Sign In</button>
      <button onClick={handleSignUp}>Sign Up</button>
    </div>
  );
};

export default SignIn;