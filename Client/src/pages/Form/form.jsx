import { useContext, useState } from 'react';
import axios from 'axios';
import { primaryContext } from '../../components/context/primarycontext';

const WorkoutForm = () => {
  const { workouts, setWorkouts } = useContext(primaryContext);

  const [formData, setFormData] = useState({
    title: '',
    volume: [],
    target: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleVolumeChange = (index, key, value) => {
    // Update the volume array in formData
    const updatedVolume = [...formData.volume];
    updatedVolume[index][key] = value;

    setFormData((prevState) => ({
      ...prevState,
      volume: updatedVolume,
    }));
  };

  const addExercise = () => {
    // Add a new exercise to the volume array in formData
    setFormData((prevState) => ({
      ...prevState,
      volume: [...prevState.volume, { set: '', reps: '' }],
    }));
  };

  const addTarget = () => {
    // Add a new target to the target array in formData
    setFormData((prevState) => ({
      ...prevState,
      target: [...prevState.target, ''],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios({
        method: 'POST',
        url: '/server/workouts',
        data: formData,
      });
      console.log(response); // response.data is the new workout
      setWorkouts([...workouts, response.data]);

      // Reset the form data after submission
      setFormData({
        title: '',
        volume: [],
        target: [],
      });
    } catch (err) {
      // Handle errors and provide user feedback
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          name="title"
          value={formData.title}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="volume">Volume:</label>
        <div>
          {formData.volume.map((exercise, index) => (
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
          <button type="button" onClick={addExercise}>Add Exercise</button>
        </div>
      </div>
      <div>
        <label htmlFor="target">Target:</label>
        <div>
          {formData.target.map((target, index) => (
            <div key={index}>
              <input
                type="text"
                name={`target[${index}]`}
                value={target}
                onChange={(e) => {
                  const updatedTarget = [...formData.target];
                  updatedTarget[index] = e.target.value;
                  setFormData((prevState) => ({
                    ...prevState,
                    target: updatedTarget,
                  }));
                }}
              />
            </div>
          ))}
          <button type="button" onClick={addTarget}>Add Target</button>
        </div>
      </div>
      <button type="submit">Create Workout</button>
    </form>
  );
};

export default WorkoutForm;