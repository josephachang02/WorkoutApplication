import { useContext, useState } from 'react';
import axios from 'axios';
import { primaryContext } from '../../components/context/primarycontext';

const WorkoutForm = () => {
  const { workouts, setWorkouts } = useContext(primaryContext);

  const [formData, setFormData] = useState({
    title: '',
    set: "",
    reps: "",
    target: []
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name==="reps" || name === "set" ) {
      setFormData((prevState) => ({
        ...prevState,
        [name]: +value,
      }));
    } else {

      setFormData((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };

  // const handleVolumeChange = (index, key, value) => {
  //   // Update the volume array in formData
  //   const updatedVolume = [...formData.volume];
  //   updatedVolume[index][key] = value;

  //   setFormData((prevState) => ({
  //     ...prevState,
  //     volume: updatedVolume,
  //   }));
  // };

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
console.log(formData);
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
        reps: '',
        sets: '',
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
            <div>
            <label htmlFor={`volume[$].sets`}>Sets:</label>
              <input
                type="number"
                name="set"
                value={formData.set}
                onChange={handleChange}
              />
              <label htmlFor={`volume[$].reps`}>Reps:</label>
              <input
                type="number"
                name="reps"
                value={formData.reps}
                onChange={handleChange}
              />
            </div>
         
          {/* <button type="button" onClick={addExercise}>Add Exercise</button> */}
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
          <button type="button" onClick={addTarget}>Add an additional target muscle</button>
        </div>
      </div>
      <button type="submit">Create Workout</button>
    </form>
  );
};

export default WorkoutForm;