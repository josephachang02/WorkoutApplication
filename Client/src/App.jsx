import { useState, useContext, useEffect} from 'react';
import axios from 'axios';
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Workout from './pages/WorkoutDisplay/workout';
import Navbar from './components/Navbar/navbar';
import { primaryContext } from './components/context/primarycontext';
import User from '../../Backend/models/user';


primaryContext
function App() {

  const { setWorkout } = useContext(primaryContext);




  useEffect(() => {
    try {
      axios({
        method: "GET",
        url: "/server/workout"
      }).then((response) => {
        // The states data should be in response.data
        setWorkout(response.data)
      })
    }catch (err) {
      console.error(err)
    }

    // try {
    //   axios({
    //     method: "GET",
    //     url: "/server/camps"
    //   }).then((response) => {
    //     // The states data should be in response.data
    //     setCamps(response.data)
    //   })
    // }catch (err) {
    //   console.error(err)
    // }
  }, []);
  // Function to show/hide the sign-up/sign-in popup
  // const togglePopup = () => {
  //   setPopupVisible(!isPopupVisible);
  // };

  return (
<div>
  <h1>Welcome {} to your Personal Workout Page
  <Navbar />
  </h1>
  {/* PAGES here */}
  <Routes>
    {/* <Route path ="/" element={<Home /> } /> */}
    <Route path ="/workout" element = {<Workout />} />
    <Route path = "/user" element = {<User /> } />
  </Routes>

  {/* {isPopupVisible && <InitialSign onClose={togglePopup} />} */}

</div>
  )
}

export default App
