require('./config/db.js')

const Workout = require('./models/workout.js')

const workouts = [
    {
        title: "Push-ups",
        set: 3, 
        reps: 15,
        target: ["Chest", "Triceps"],
      },
      {
        title: "Squats",
        set: 4, 
        reps: 12,
        target: ["Quadriceps", "Hamstrings", "Glutes"],
      },
      {
        title: "Bicep Curls",
        set: 3, 
        reps: 10,
        target: ["Biceps" , "Forearms"],
      },
      {
        title: "Plank",
        set: 3,
        reps: 60,
        target: ["Core"],
      },
      {
        title: "Pull-ups",
        set: 4,
        reps: 8,
        target: ["Back", "Biceps"],
      },
      {
        title: "Deadlift",
        set: 5,
        reps: 5,
        target: ["Lower Back", "Hamstrings", "Glutes"],
      },
      {
        title: "Lunges",
        set: 3,
        reps: 12,
        target: ["Quadriceps", "Hamstrings", "Glutes"],
      },
      {
        title: "Dumbbell Bench Press",
        set: 4,
        reps: 10,
        target: ["Chest", "Triceps"],
      },
      {
        title: "Russian Twists",
        set: 3,
        reps: 20,
        target: ["Core", "Obliques"],
      },
      {
        title: "Lat Pulldowns",
        set: 4,
        reps: 12,
        target: ["Back", "Biceps"],
      },
      {
        title: "Leg Press",
        set: 4,
        reps: 12,
        target: ["Quadriceps", "Hamstrings", "Glutes"],
      },
      {
        title: "Shoulder Press",
        set: 3,
        reps: 8,
        target: ["Shoulders", "Triceps"],
      },
      {
        title: "Plank",
        set: 3,
        reps: 60,
        target: ["Core"],
      },
      {
        title: "Bicycle Crunches",
        set: 3,
        reps: 20,
        target: ["Core", "Obliques"],
      },
      {
        title: "Barbell Rows",
        set: 4,
        reps: 10,
        target: ["Back", "Biceps"],
      },
      {
        title: "Incline Dumbbell Press",
        set: 4,
        reps: 10,
        target: ["Triceps", "Biceps", "Anterior Deltoid"],
      },
    ];

    const insertWorkouts = async () => {
        try {
          await Workout.deleteMany(); // Remove existing data (optional)
          await Workout.insertMany(workouts); // Insert the workout data
          console.log('Workouts inserted successfully.');
        } catch (error) {
          console.error('Error inserting workouts:', error);
        }
      };
      
      insertWorkouts(); 
      
      
      
      