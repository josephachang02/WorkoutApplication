const mongoose = require("mongoose");

const workoutSchema = new mongoose.Schema({
    Workout: {type: String, required: true},
    Sets: {type: Number, required: true},
    Repetitions: {type: Number, required: true},


},
{
    timestamps: true
});

const Workout = mongoose.model('Workout', workoutSchema);
module.exports = Workout;