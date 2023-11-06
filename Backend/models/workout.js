const mongoose = require("mongoose");

const workoutSchema = new mongoose.Schema({
    title: {
        type: String,

    },
// we now incorporate sets and reps into the volume
        set: {
            type: Number,
            
            },
         reps: {
            type: Number,
          
            },
// target is an array, that will allow for more than just one body part 
    target: [
        {
        type: String,

        }
        ],
},{ timestamps: true
});

const Workout = mongoose.model('Workout', workoutSchema);
module.exports = Workout;