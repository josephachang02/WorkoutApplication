import React, { useContext } from 'react'
import { primaryContext } from '../../context/primaryContext'
import axios from 'axios';

const UpdateForm = () => {


    const { workout, setWorkouts, workoutEdit, setWorkoutEdit, user } = useContext(primaryContext);
 

    // submit is different

    // formdata or campToEdi
    
    const handleChange = (e) => {
        const { title, value } = e.target;
        setWorkoutEdit(prevState => ({
            ...prevState,
            [title]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // sometimes here stateId is a "223lu123oiu21" and other times it is an object {_id, name, tax}
        
        // let campWithFixedId = 
        // typeof campToEdit.stateId === "string" 
        // ? campToEdit 
        // :  {...campToEdit, stateId: campToEdit.stateId._id};



        // console.log(campWithFixedId);
        let response = await axios({
            method: "PUT",
            url: `/server/workout/${workoutEdit._id}`,
            data: workoutEdit // found in req.body
        })
        console.log(response);

        let NewExercise = workout.map((workout) => {
            if (workout._id == workoutEdit._id) {
                return response.data
            } else {
                return workout
            }
          })
          user(NewExercise);
          setWorkoutEdit(null)

        // update fronted state as well!
    }

  return (
    <form onSubmit={handleSubmit}>
    <div>
        <label htmlFor="stateId">State:</label>
        <select
            id="stateId"
            name="stateId"
            value={campToEdit.stateId._id}
            onChange={handleChange}
        >
            <option value="" disabled>Select a state</option>
            {states.map(state => (
                <option key={state._id} value={state._id}>
                    {state.name}
                </option>
            ))}
        </select>
    </div>
    <div>
        <label htmlFor="name">Name:</label>
        <input
            type="text"
            id="name"
            name="name"
            value={campToEdit.name}
            onChange={handleChange}
        />
    </div>
    <div>
        <label htmlFor="price">Price:</label>
        <input
            type="number"
            id="price"
            name="price"
            value={campToEdit.price}
            onChange={handleChange}
        />
    </div>
    <div>
        <label htmlFor="img">Image URL:</label>
        <input
            type="text"
            id="img"
            name="img"
            value={campToEdit.img}
            onChange={handleChange}
        />
    </div>
    <button type="submit">Submit updates</button>
</form>
  )
}

export default UpdateForm