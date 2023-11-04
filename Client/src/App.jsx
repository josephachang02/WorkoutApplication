import { useState } from 'react'
import './App.css'
import { Link, Route, Routes } from 'react-router-dom'
import Home from './pages/Home/home';
import Workout from './pages/Workout/workout';
import User from './pages/User/user';
import InitialSign from './components/InitialSign/initialsign';

function App() {
  const [isPopupVisible, setPopupVisible] = useState(false);

  // Function to show/hide the sign-up/sign-in popup
  const togglePopup = () => {
    setPopupVisible(!isPopupVisible);
  };

  return (
<div>
  <h1>Welcome {} to your Personal Workout Page
  <nav id = "homeNav">
    <Link to ="/">Home</Link>
    <Link to ="/workouts">Workout List</Link>
    <Link to ="/user"onClick={togglePopup}>
            User
    </Link>
  </nav>
  </h1>
  {/* PAGES here */}
  <Routes>
    <Route path ="/" element={<Home /> } />
    <Route path ="/workouts" element = {<Workout />} />
    <Route path = "/user" element = {<User /> } />
  </Routes>

  {isPopupVisible && <InitialSign onClose={togglePopup} />}

</div>
  )
}

export default App
