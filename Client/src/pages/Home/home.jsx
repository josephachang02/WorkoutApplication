import { useEffect, useState } from 'react'
import Form from '../Form/form'
import Details from '../Details/details'

//components

const Home = ()=>{
  const [workouts, setWorkouts] = useState()
  useEffect(()=>{
      const fetchWorkout = async()=>{
          const response = await fetch('/api/workout')
          const json = await response.json()

          if(response.ok){
              setWorkouts(json)
          }
      }
      fetchWorkout()
  },[]);
  return(
      <div className="home">
          <div className="workouts">
              {workouts && workouts.map((workout)=>(
                  <Details key={workout._id} workout = {workout} />
              ))}
          </div>
          <Form />
      </div>
  )
}

export default Home