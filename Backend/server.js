const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const helmet = require("helmet");
require('dotenv').config();
require('./config/db.js');
const Workout = require('./server/workout.js')
const User = require('./server/user.js')
const PORT = 3175;
const mongoose = require('mongoose')

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

  app.get("server/all",async (req,res)=>{
    const workouts = await Workout.find({}).sort({createdAt :-1})
    res.status(200).json(workouts)
})


  app.get("server/:id", async(req, res)=>{
    const { id } = req.params
    if(!mongoose.Types.ObjectId.isValid()){
        res.status(404).json({error:"No such workout "})
    }
    const workout = await Workout.findById(id)

    if(!workout){
        return res.status(404).json({error: "No such workout "})
    }
    res.status(200).json(workout)
});
   
   app.post("server/create", async (req, res)=>{
    const {title,  load ,rep } = req.body
    try{
        const workout = await Workout.create({title,  load ,rep })
        res.status(200).json(workout)
    }catch(error){
        res.status(404).json({error: error.message})
    }
    res.json({"body" : "Post New workout"});
})
  
   app.delete("server/delete/:id", async (req, res)=>{
    const { id } = req.params
    if(!mongoose.Types.ObjectId.isValid()){
        res.status(404).json({error:"No such workout "})
    }

    const workout = await Workout.findOneAndDelete({_id: id})
    if(!workout){
        return res.status(404).json({error: "No such workout "})
    }
    res.status(200).json(workout)

})
  
   app.update("sever/update/:id", async (req, res)=>{
    const { id } = req.params
    if(!mongoose.Types.ObjectId.isValid()){
        res.status(404).json({error:"No such workout "})
    }
    const workout = await Workout.findOneAndReplace({_id: id},{
        ...req.body
    })
    if(!workout){
        return res.status(404).json({error: "No such workout "})
    }
    res.status(200).json(workout)
   

})
  
 




app.listen(PORT, ()=> {
    console.log(`Server LIVE on port ${PORT}`);
});