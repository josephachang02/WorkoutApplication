require('./config/db.js')

const Workout = require('./models/workout.js')

const workouts = [
    {
        title: "Push-ups",
        volume: [
          { set: 3, reps: 15 },
          { set: 3, reps: 15 },
        ],
        target: ["Chest", "Triceps"],
      },
      {
        title: "Squats",
        volume: [
          { set: 4, reps: 12 },
        ],
        target: ["Quadriceps", "Hamstrings", "Glutes"],
      },
      {
        title: "Bicep Curls",
        volume: [
          { set: 3, reps: 10 },
        ],
        target: ["Biceps"],
      },
      {
        title: "Plank",
        volume: [
          { set: 3, reps: 60 },
        ],
        target: ["Core"],
      },
      {
        title: "Pull-ups",
        volume: [
          { set: 4, reps: 8 },
        ],
        target: ["Back", "Biceps"],
      },
      {
        title: "Deadlifts",
        volume: [
          { set: 5, reps: 5 },
        ],
        target: ["Lower Back", "Hamstrings", "Glutes"],
      },
      {
        title: "Lunges",
        volume: [
          { set: 3, reps: 12 },
        ],
        target: ["Quadriceps", "Hamstrings", "Glutes"],
      },
      {
        title: "Dumbbell Bench Press",
        volume: [
          { set: 4, reps: 10 },
        ],
        target: ["Chest", "Triceps"],
      },
      {
        title: "Russian Twists",
        volume: [
          { set: 3, reps: 20 },
        ],
        target: ["Core", "Obliques"],
      },
      {
        title: "Lat Pulldowns",
        volume: [
          { set: 4, reps: 12 },
        ],
        target: ["Back", "Biceps"],
      },
      {
        title: "Leg Press",
        volume: [
          { set: 4, reps: 12 },
        ],
        target: ["Quadriceps", "Hamstrings", "Glutes"],
      },
      {
        title: "Shoulder Press",
        volume: [
          { set: 3, reps: 8 },
        ],
        target: ["Shoulders", "Triceps"],
      },
      {
        title: "Plank",
        volume: [
          { set: 3, reps: 60 },
        ],
        target: ["Core"],
      },
      {
        title: "Bicycle Crunches",
        volume: [
          { set: 3, reps: 20 },
        ],
        target: ["Core", "Obliques"],
      },
      {
        title: "Barbell Rows",
        volume: [
          { set: 4, reps: 10 },
        ],
        target: ["Back", "Biceps"],
      },
    ];

const insert = async () => {
    // dont want to enter all the states twice 
    await State.deleteMany()
    await State.insertMany(states);
} 
insert()