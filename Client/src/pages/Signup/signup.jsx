import { useContext, useState } from 'react';
import axios from 'axios';
import { primaryContext } from '../../components/context/primarycontext';
import "./index.css"

const SignUpForm = () => {
  const { user, setUser } = useContext(primaryContext)
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    name: '',
    frequency: '',
    goals: '',
    levels: '',
    favorites: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/server/signup', formData); // Adjust the API endpoint as needed

      // Assuming that the response includes the newly created user data
      const newUser = response.data;

      // Update the user context with the new user data
      setUser(newUser);

      console.log(newUser);
    } catch (error) {
      console.error(error);
    }
  };


  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input type="text" name="username" value={formData.username} onChange={handleChange} />
      </label>
      <label>
        Password:
        <input type="password" name="password" value={formData.password} onChange={handleChange} />
      </label>
      <label>
        Name:
        <input type="text" name="name" value={formData.name} onChange={handleChange} />
      </label>
      <label>
        Frequency:
        <select name="frequency" value={formData.frequency} onChange={handleChange}>
          <option value=""></option>
          <option value="Daily">Daily</option>
          <option value="1-2x/week">1 - 2 times per week</option>
    <option value="3-5x/week">3 - 5 times per week</option>
    <option value="6-7x/week">6 - 7 times per week</option>
          <option value="Weekly">Weekly</option>
          <option value="Biweekly">Biweekly</option>
          <option value="Monthly">Monthly</option>
        </select>
      </label>
      <label>
        Goals:
        <select name="goals" value={formData.goals} onChange={handleChange}>
          <option value=""></option>
          <option value="Lose Weight">Lose Weight</option>
          <option value="Build Muscle">Build Muscle</option>
          <option value="Cardio">Improve Cardiovascular Health</option>
          <option value="Increase Strength">Increase Strength</option>
          <option value="Recomposition">Recomposition</option>
          <option value="Improve Flexibility">Improve Flexibility</option>
          <option value="Sport-Specific Training">Sport-Specific Training</option>

        </select>
      </label>
      <label>
        Levels:
        <select name="levels" value={formData.levels} onChange={handleChange}>
          <option value=""></option>
          <option value="Intro">No Experience</option>
          <option value="Beginner">Beginner (less than 6 months)</option>
          <option value="Novice">Novice (6 months - 1 year)</option>
          <option value="Intermediate">Intermediate (1 months - 2.5 year)</option>
          <option value="Advanced">Advanced (2.5 - 5 years)</option>
          <option value="Expert">Expert (+5 years)</option>
          <option value="Powerlifting">PowerLifting</option>
          <option value="Weightlifter">Weightlifter</option>
          <option value="Bodybuilder">Bodybuilder</option>
        </select>
      </label>
      {/* <label>
        Favorites:
        <input type="text" name="favorites" value={formData.favorites} onChange={handleChange} />
      </label> */}
      <button type="submit">Sign Up</button>
    </form>
  );
};

export default SignUpForm