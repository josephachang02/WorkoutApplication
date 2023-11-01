import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Link, Route, Routes } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
<div>
  <h1>Welcome {} to your Personal Workout Page
  <nav id = "homeNav">
    <Link to ="/">Home</Link>
    <Link to ="/workouts">Workout List</Link>
    <Link to ="/user">User</Link>
  </nav>
  {/* PAGES here */}
  <Routes>
    <Route path ="/" element={<Home /> } />
    <Route path ="/workouts" element = {<Workout />} />
    <Route path = "/user" element = {<User /> } />
  </Routes>
  </h1>
</div>
  )
}

export default App
