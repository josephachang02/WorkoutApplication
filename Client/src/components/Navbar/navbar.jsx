import { Link } from 'react-router-dom'
import './index.css'

const Navbar = () => {
  return (
    <div>
  <div className="navbar">
    <div className="nav-left">
      <Link to="/">Home</Link>
      <Link to="/workoutsDisplay">All Workouts</Link>
      <Link to="/workout/create">Make your own Exercise</Link>
      <Link to="/workout/update/:id">Update your own Exercise</Link>
      <Link to="/user">User</Link>
    </div>
    <div className='nav-right'>
      <Link to="/user">User Login</Link>
      <Link to="/signup">Sign Up</Link>
    </div>
  </div>
</div>
  );
};

export default Navbar;