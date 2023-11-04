import React, { useState } from 'react';

const InitialSign = ({ onClose }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  // ... other form fields and state

  const handleSignIn = () => {
    // Implement sign-in logic
    // Close the popup on success
    onClose();
  };

  const handleSignUp = () => {
    // Implement sign-up logic
    // Close the popup on success
    onClose();
  };

  return (
    <div className="popup">
      <div className="popup-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        {/* Your sign-up/sign-in form */}
        <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        {/* ... other form fields */}
        <button onClick={handleSignIn}>Sign In</button>
        <button onClick={handleSignUp}>Sign Up</button>
      </div>
    </div>
  );
};

export default InitialSign