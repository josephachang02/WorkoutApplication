const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const path = require('path');
const helmet = require("helmet");
require('dotenv').config();
require('./config/db.js');
const Workout = require('./models/workout.js')
const User = require('./models/user.js')
const PORT = 5174;
const mongoose = require('mongoose')

const app = express();

app.use(express.json());
app.use(cors({
    origin: "*"
}));
app.use(morgan('dev'));
app.use(helmet());

app.use((req, res, next) => {
  console.log(req.path);
  console.log("doing middleware");
    if (req.path.startsWith("/server")) {
        req.url = req.url.replace('/server', '');
    }
    next();
})
app.use(express.static(path.join(__dirname, "../client/dist")));

// ROUTES 
// app.post('/server/signup', async (req,res) => {
//     const {
//         username,
//         password,
//         name,
//         frequency,
//         goals,
//         levels,
//         favorites,
//     } = req.body;

//     try {
//         // Check if the username already exists
//         const existingUser = await User.findOne({ username });
    
//         if (existingUser) {
//           return res.status(400).json({ message: 'Username already exists' });
//         }
    
//         // Create a new user
//         const newUser = new User({
//           username,
//           password,
//           name,
//           frequency,
//           goals,
//           levels,
//           favorites,
//         });

// await newUser.save();


// You can add user authentication logic here (e.g., JWT)

// res.status(201).json({ message: 'User registered successfully' });
// } catch (error) {
// console.error(error);
// res.status(500).json({ message: 'Internal server error' });
// }
// });


// autenticate user (signin)

// app.post('/server/signin', async (req, res) => {
//     const { username, password } = req.body;
  
//     try {
//       // Check if the user exists
//       const user = await User.findOne({ username });
  
//       if (!user || user.password !== password) {
//         return res.status(401).json({ message: 'Invalid credentials' });
//       }
  
//       // You can add user authentication logic here (e.g., JWT)
  
//       res.json({ message: 'Sign in successful' });
//     } catch (error) {
//       console.error(error);
//       res.status(500).json({ message: 'Internal server error' });
//     }
//   });

//sign up form 
app.post('/signup', async (req,res) => {
  try {
    const dbResponse = await User.create(req.body);
    res.status(201).json(dbResponse);
  } catch (err) {
    console.error(err); // Log the error to the console for debugging
    res.status(400).json({ error: 'Error creating User' });
  }
});
  
  app.post('/workout/create', async (req, res) => {
    try {
      const dbResponse = await Workout.create(req.body);
      res.status(201).json(dbResponse);
    } catch (err) {
      res.status(400).json({ error: 'Error creating workout' });
    }
  });
  
  // Route to get all workouts
  app.get('/workouts', async (req, res) => {
    try {
      const dbResponse = await Workout.find();
      res.status(200).json(dbResponse);
    } catch (err) {
      res.status(400).json({ error: 'Error getting workouts', title: (err) });
    }})
  
  // Route to update a workout
  app.put('/workout/update/:id', async (req, res) => {
    try {
      const dbResponse = await Workout.findByIdAndUpdate(req.params.workoutId, req.body, { new: true });
      res.status(200).json(dbResponse);
    } catch (err) {
      res.status(400).json({ error: 'Error updating workout' });
    }
  });
  
  // Route to delete a workout
  // app.delete('/workouts/:workoutId', async (req, res) => {
  //   try {
  //     const dbResponse = await Workout.findByIdAndDelete(req.params.workoutId);
  //     res.status(200).json(dbResponse);
  //   } catch (err) {
  //     res.status(400).json({ error: 'Error deleting workout' });
  //   }
  // });
  
  // Route to get all workouts sorted by createdAt
  app.get('/workoutsDisplay', async (req, res) => {
    const workouts = await Workout.find({}).sort({ createdAt: -1 });
    res.status(200).json(workouts);
  });
  
  // Route to get a single workout by ID
  // app.get('/workouts/:id', async (req, res) => {
  //   const { id } = req.params;
  //   if (!mongoose.Types.ObjectId.isValid(id)) {
  //     return res.status(404).json({ error: 'No such workout' });
  //   }
  //   const workout = await Workout.findById(id);
  //   if (!workout) {
  //     return res.status(404).json({ error: 'No such workout' });
  //   }
  //   res.status(200).json(workout);
  // // });
  // app.post("/workouts", (req, res) => {
  //   console.log("hitting workouts reoute")
  // })
  
  // Route to create a new workout
  app.post('/workouts', async (req, res) => {
    console.log("server reached");
    try {
      const workout = await Workout.create(req.body);
      res.status(200).json(workout);
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
    console.log("server reached");
  });
  
  
  // Route to delete a workout by ID
  app.delete('/workouts/delete/:id', async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ error: 'No such workout' });
    }
    const workout = await Workout.findOneAndDelete({ _id: id });
    if (!workout) {
      return res.status(404).json({ error: 'No such workout' });
    }
    res.status(200).json(workout);
  });
  
  // Route to update a workout by ID
  app.put('/workouts/update/:id', async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ error: 'No such workout' });
    }
    const workout = await Workout.findOneAndUpdate({ _id: id }, { ...req.body }, { new: true });
    if (!workout) {
      return res.status(404).json({ error: 'No such workout' });
    }
    res.status(200).json(workout);
  });
  
 




app.listen(PORT, ()=> {
    console.log(`Server LIVE on port ${PORT}`);
});