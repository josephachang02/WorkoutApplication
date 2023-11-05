const mongoose = require("mongoose");

const workoutSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
// we now incorporate sets and reps into the volume
    volume: [
        {
        set: {
            type: Number,
            required: true
            },
        reps: {
            type: Number,
            required: true
            }
        }
    ],
// target is an array, that will allow for more than just one body part 
    target: [
        {
        type: String,
        required: true
        }
        ],
},{ timestamps: true
});

const Workout = mongoose.model('Workout', workoutSchema);
module.exports = Workout;