import { useContext, useState } from 'react';
import { primaryContext } from '../../components/context/primarycontext';
import axios from 'axios';

const UpdateForm = () => {
  const { workout, setWorkouts, workoutEdit, setWorkoutEdit } = useContext(primaryContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setWorkoutEdit((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleVolumeChange = (index, key, value) => {
    // Update the volume array in workoutEdit
    const updatedVolume = [...workoutEdit.volume];
    updatedVolume[index][key] = value;

    setWorkoutEdit((prevState) => ({
      ...prevState,
      volume: updatedVolume,
    }));
  };

  const handleTargetChange = (index, value) => {
    // Update the target array in workoutEdit
    const updatedTarget = [...workoutEdit.target];
    updatedTarget[index] = value;

    setWorkoutEdit((prevState) => ({
      ...prevState,
      target: updatedTarget,
    }));
  };

  const addExercise = () => {
    // Add a new exercise to the volume array
    setWorkoutEdit((prevState) => ({
      ...prevState,
      volume: [...prevState.volume, { set: '', reps: '' }],
    }));
  };

  const addTarget = () => {
    // Add a new target to the target array
    setWorkoutEdit((prevState) => ({
      ...prevState,
      target: [...prevState.target, ''],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.put(`/server/workout/${workoutEdit._id}`, workoutEdit);
      console.log(response);

      const newWorkouts = workout.map((workoutItem) => {
        if (workoutItem._id === workoutEdit._id) {
          return response.data;
        } else {
          return workoutItem;
        }
      });
      setWorkouts(newWorkouts);
      setWorkoutEdit(null);
    } catch (error) {
      console.error('Error updating workout:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {workoutEdit && ( // Check if workoutEdit is not null
        <div>
          <div>
            <label htmlFor="title">Title:</label>
            <input
              type="text"
              id="title"
              name="title"
              value={workoutEdit.title}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="volume">Volume:</label>
            <div>
              {workoutEdit.volume.map((exercise, index) => (
                <div key={index}>
                  <label htmlFor={`volume[${index}].set`}>Set {index + 1}:</label>
                  <input
                    type="number"
                    name={`volume[${index}].set`}
                    value={exercise.set}
                    onChange={(e) => handleVolumeChange(index, 'set', e.target.value)}
                  />
                  <label htmlFor={`volume[${index}].reps`}>Reps {index + 1}:</label>
                  <input
                    type="number"
                    name={`volume[${index}].reps`}
                    value={exercise.reps}
                    onChange={(e) => handleVolumeChange(index, 'reps', e.target.value)}
                  />
                </div>
              ))}
              <div>
                <input
                  type="number"
                  name="set"
                  placeholder="Set"
                  value={workoutEdit.volume.length > 0 ? workoutEdit.volume[workoutEdit.volume.length - 1].set : ''}
                  onChange={(e) => handleVolumeChange(workoutEdit.volume.length - 1, 'set', e.target.value)}
                />
                <input
                  type="number"
                  name="reps"
                  placeholder="Reps"
                  value={workoutEdit.volume.length > 0 ? workoutEdit.volume[workoutEdit.volume.length - 1].reps : ''}
                  onChange={(e) => handleVolumeChange(workoutEdit.volume.length - 1, 'reps', e.target.value)}
                />
                <button type="button" onClick={addExercise}>Add Exercise</button>
              </div>
            </div>
          </div>
          <div>
            <label htmlFor="target">Target:</label>
            <div>
              {workoutEdit.target.map((target, index) => (
                <div key={index}>
                  <input
                    type="text"
                    name={`target[${index}]`}
                    value={target}
                    onChange={(e) => handleTargetChange(index, e.target.value)}
                  />
                </div>
              ))}
              <div>
                <input
                  type="text"
                  name="target"
                  placeholder="Target"
                  value={workoutEdit.target.length > 0 ? workoutEdit.target[workoutEdit.target.length - 1] : ''}
                  onChange={(e) => handleTargetChange(workoutEdit.target.length - 1, e.target.value)}
                />
                <button type="button" onClick={addTarget}>Add Target</button>
              </div>
            </div>
          </div>
          <button type="submit">Submit updates</button>
        </div>
      )}
    </form>
  );
};

export default UpdateForm;