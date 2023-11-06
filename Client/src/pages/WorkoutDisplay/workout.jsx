import { useContext } from 'react';
import axios from 'axios';
import UpdateForm from '../../components/UpdateForm/updateForm';
import { primaryContext } from '../../components/context/primarycontext';

const WorkoutsDisplay = () => {
  const { workouts, setWorkouts, workoutEdit, setWorkoutEdit } = useContext(primaryContext);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/server/workout/${id}`);
      const newWorkouts = workouts.filter((workout) => workout._id !== id);
      setWorkouts(newWorkouts);
    } catch (error) {
      console.error('Error deleting workout:', error);
    }
  }


  return (
    <div>
      {setWorkoutEdit && <UpdateForm workoutEdit={workoutEdit} />}

      {workouts.map((workout) => {
        return (
          <div key={workout._id} className="workout">
            <h3>{workout.title}</h3>
            <button onClick={() => handleDelete(workout._id)}>DELETE</button>
            <button onClick={() => setWorkoutEdit(workout)}>Edit</button>
            <p>Volume:</p>
            
              <p>{`Set: ${workout.volume.set} Reps: ${workout.volume.reps}`}</p>
            <p>Target:</p>
            {workout.target.map((bodyPart, index) => (
              <p key={index}>{bodyPart}</p>
            ))}
          </div>
        );
      })}
    </div>
  );
}

export default WorkoutsDisplay;