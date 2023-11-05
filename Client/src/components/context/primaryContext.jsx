import { createContext, useState } from 'react';

export const primaryContext = createContext();


const PrimaryProvider = ({children}) => {

    const [workout, setWorkouts] = useState([]);
    // const [user, setUser] = useState([]);
    const [workoutEdit, setWorkoutEdit] = useState(null);

    // return provider div
    return (
        <primaryContext.Provider value={{ workout, setWorkouts, workoutEdit, setWorkoutEdit }}>
          {children}
        </primaryContext.Provider>
      );
    };

export default PrimaryProvider;