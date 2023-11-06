import { Link } from 'react-router-dom'
import './index.css'

const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/">All Workouts</Link>
      <Link to="/workout/create">Make your own Exercise</Link>
      <Link to="/workout/update/:id">Update your own Exercise</Link>
      <Link to="/user">User</Link>
    </div>
  );
};

export default Navbar;