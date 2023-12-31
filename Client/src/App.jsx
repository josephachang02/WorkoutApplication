import { useContext, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import axios from 'axios';
import Navbar from './components/Navbar/navbar';
import Home from './pages/Home/home';
import WorkoutsDisplay from './pages/WorkoutDisplay/workout';
import WorkoutForm from './pages/Form/form';
import SignUpForm from './pages/Signup/signup';
import UpdateForm from './components/UpdateForm/updateForm';
// import SingleWorkout from './SingleWorkout';
import { primaryContext } from './components/context/primarycontext';
import SignInForm from './pages/SignIn';

function App() {
  const { setWorkouts } = useContext(primaryContext);

  useEffect(() => {
    // Fetch workouts data
    try {
      axios({
        method: 'GET',
        url: '/server/workoutsDisplay', // Adjust the URL to match your backend endpoint for workouts
      }).then((response) => {
        // The workouts data should be in response.data
        setWorkouts(response.data);
      });
    } catch (err) {
      console.error('this is the error' + err);
    }
  }, [setWorkouts]);

  return (
    <div>
      <Navbar />
      {/* <WorkoutsDisplay /> */}
      <Routes>
        <Route path ="/" element ={<Home />} />
        <Route path="/workoutsDisplay" element={<WorkoutsDisplay />} />
        <Route path="/workout/create" element={<WorkoutForm />} />
        <Route path="/workout/update/:id" element={<UpdateForm />} />
        <Route path="/signup" element={<SignUpForm />} />
        <Route path="/signin" element={<SignInForm />} />
      </Routes>
    </div>
  );
}

export default App;