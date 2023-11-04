import React from 'react'
import { Link } from 'react-router-dom'

const navbar = () => {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/workout">Exercise Lists</Link>
      <Link to="/user">User</Link>
    </div>
  )
}

export default navbar