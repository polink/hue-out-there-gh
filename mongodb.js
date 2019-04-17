'use strict';


const options = {
    useNewUrlParser: true,
    useCreateIndex: true,
};

require('dotenv').config();

const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI, options);


// // add light id to the user database
// // reference to database
// let db = mongoose.connection;
//
// db.on('error', console.error.bind(console, 'connection error:'));
//
// db.once('open', function() {
//     console.log("Connection Successful!");
// });
//
// // create a new schema for the lights id
// let lightsSchema = mongoose.Schema({
//     _id: [Number]
// })
//
// let lightSet = mongoose.model('lightSet', lightsSchema);

