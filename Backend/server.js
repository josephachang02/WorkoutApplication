const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const helmet = require("helmet");
require('dotenv').config();
require('./config/db.js');
const Workout = require('./server/workout.js')
const User = require('./server/user.js')
const PORT = 3175;

const app = express();

app.use(express.json());
app.use(cors({
    origin: "*"
}));
app.use(morgan('dev'));
app.use(helmet());
app.use((req, res, next) => {
    if (req.path.startsWith("/server")) {
        req.url = req.url.replace('/server', '');
    }
    next();
})

// ROUTES 
app.post('/server/signup', async (req,res) => {
    const {
        username,
        password,
        name,
        frequency,
        goals,
        levels,
        favorites,
    } = req.body;

    try {
        // Check if the username already exists
        const existingUser = await User.findOne({ username });
    
        if (existingUser) {
          return res.status(400).json({ message: 'Username already exists' });
        }
    
        // Create a new user
        const newUser = new User({
          username,
          password,
          name,
          frequency,
          goals,
          levels,
          favorites,
        });

await newUser.save();


// You can add user authentication logic here (e.g., JWT)

res.status(201).json({ message: 'User registered successfully' });
} catch (error) {
console.error(error);
res.status(500).json({ message: 'Internal server error' });
}
});


// autenticate user (signin)

app.post('/server/signin', async (req, res) => {
    const { username, password } = req.body;
  
    try {
      // Check if the user exists
      const user = await User.findOne({ username });
  
      if (!user || user.password !== password) {
        return res.status(401).json({ message: 'Invalid credentials' });
      }
  
      // You can add user authentication logic here (e.g., JWT)
  
      res.json({ message: 'Sign in successful' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });
  
  // ... other routes ...
  
  const port = process.env.PORT || 3175;
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });



app.listen(PORT, ()=> {
    console.log(`Server LIVE on port ${PORT}`);
});