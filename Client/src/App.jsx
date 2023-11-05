import { useContext, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import axios from 'axios';
import Navbar from './components/Navbar/navbar';
import WorkoutsDisplay from './pages/WorkoutDisplay/workout';
import WorkoutForm from './pages/Form/form';
// import SingleWorkout from './SingleWorkout';
import { primaryContext } from './components/context/primarycontext';

function App() {
  const { setWorkouts } = useContext(primaryContext);

  useEffect(() => {
    // Fetch workouts data
    try {
      axios({
        method: 'GET',
        url: 'server/workouts', // Adjust the URL to match your backend endpoint for workouts
      }).then((response) => {
        // The workouts data should be in response.data
        setWorkouts(response.data);
      });
    } catch (err) {
      console.error(err);
    }
  }, [setWorkouts]);

  return (
    <div>
      <Routes>
        <Route path="/" element={<WorkoutsDisplay />} />
        <Route path="/workouts/create" element={<WorkoutForm />} />
      </Routes>
    </div>
  );
}

export default App;