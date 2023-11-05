import { Link } from 'react-router-dom'

const navbar = () => {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/workout/new">Make your own Exercise</Link>
      <Link to="/user">User</Link>
    </div>
  )
}

export default navbar