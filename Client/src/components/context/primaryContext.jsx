import { createContext, useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';

export const primaryContext = createContext();


const PrimaryProvider = ({children}) => {

    const [workouts, setWorkouts] = useState([]);
    const [user, setUser] = useState([]);
    const [workoutEdit, setWorkoutEdit] = useState(null);
    const [userFavorites, setUserFavorites] = useState([]);

    useEffect(() => {
      axios({ 
        method: "GET",
        url: "/server/workouts",
      }) .then((response) => {

        console.log(response)
      }

      )
    }, [])
    // return provider div
    return (
        <primaryContext.Provider value={{ workouts, setWorkouts, workoutEdit, setWorkoutEdit, user, setUser, userFavorites, setUserFavorites }}>
          {children}
        </primaryContext.Provider>
      );
    };

export default PrimaryProvider;