const mongoose = require('mongoose');

let connectionString = process.env.MONGO_URL

console.log(connectionString);

mongoose.connect(`mongodb+srv://josephachang02:!Bostonfan1@workoutapp.41qunzy.mongodb.net/?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});


//log when connected

mongoose.connection.once('open', () => {
    console.log('connected to MongoDB Database');
});