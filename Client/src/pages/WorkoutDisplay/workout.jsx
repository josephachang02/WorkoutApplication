import { useContext } from 'react';
import axios from 'axios';
import UpdateForm from '../../components/UpdateForm/updateForm';
import { primaryContext } from '../../components/context/primarycontext';

const WorkoutsDisplay = () => {
  const { workout, setWorkouts, workoutEdit, setWorkoutEdit } = useContext(primaryContext);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/server/workout/${id}`);
      const newWorkouts = workout.filter((workout) => workout._id !== id);
      setWorkouts(newWorkouts);
    } catch (error) {
      console.error('Error deleting workout:', error);
    }
  }

  return (
    <div>
      {setWorkoutEdit && <UpdateForm workoutEdit={workoutEdit} />}

      {workout.map((workout) => {
        return (
          <div key={workout._id} className="workout">
            <h3>{workout.title}</h3>
            <button onClick={() => handleDelete(workout._id)}>DELETE</button>
            <button onClick={() => setWorkoutEdit(workout)}>Edit</button>
            <p>Volume:</p>
            {workout.volume.map((exercise, index) => (
              <p key={index}>{`Set ${index + 1}: ${exercise.set} Reps: ${exercise.reps}`}</p>
            ))}
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