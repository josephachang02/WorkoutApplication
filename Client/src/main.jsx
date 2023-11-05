import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter as Router } from 'react-router-dom'
// import { AuthProvider } from './components/AuthContext/authContext.jsx'
// import { requireAuth }from '../../Backend/models/Auth.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <requireAuth>
    <Router>
    <App />
    </Router>
    </requireAuth>
  </React.StrictMode>,
)
