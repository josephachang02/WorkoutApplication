import { useContext } from 'react';
import axios from 'axios';
import UpdateForm from '../../components/UpdateForm/updateForm';
import './index.css'
import FavoriteIcon from '@mui/icons-material/FavoriteBorder';
import { primaryContext } from '../../components/context/primarycontext';

const WorkoutsDisplay = () => {
  const { workouts, setWorkouts, workoutEdit, setWorkoutEdit, userFavorites, setUserFavorites } = useContext(primaryContext);

  //changes
  
  const handleDelete = async (id) => {
    try {
      await axios.delete(`/server/workout/${id}`);
      const newWorkouts = workouts.filter((workout) => workout._id !== id);
      setWorkouts(newWorkouts);
    } catch (error) {
      console.error('Error deleting workout:', error);
    }
  }

  const addToFavorites = (workout) => {
    if (user && user.isLoggedIn) {
      // User is logged in and can add workouts to favorites
      // In this example, we use the workout ID as a key to store the workout in userFavorites
      setUserFavorites((prevFavorites) => ({
        ...prevFavorites,
        [workout._id]: workout,
      }));
    } else {
      // User is not logged in, handle this case as needed (e.g., show a login prompt)
      console.log('User is not logged in. Please log in to add workouts to favorites.');
    }
  };

  return (
    <div className="workout-list">
      {/* {setWorkoutEdit && <UpdateForm workoutEdit={workoutEdit} />} */}

      {workouts.map((workout) => {
        return (
          <div key={workout._id} className="workout">
            <h3>{workout.title} 
            <FavoriteIcon
                className="favorite-icon" // Add a class name for the FavoriteIcon
                onClick={() => addToFavorites(workout)}
                color="action"
              /></h3>
            <button className='Delete' onClick={() => handleDelete(workout._id)}>DELETE</button>
            <button className='Edit'onClick={() => setWorkoutEdit(workout)}>Edit</button>
              <p>{`Set: ${workout.set}`}</p> 
              <p>{`Reps: ${workout.reps}`}</p>
          <p>Target: {workout.target.join(', ')}</p>
        </div>
      );
    })}
  </div>
);
}

export default WorkoutsDisplay;