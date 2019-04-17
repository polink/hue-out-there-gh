'use strict';


const options = {
    useNewUrlParser: true,
    useCreateIndex: true,
};

require('dotenv').config();

const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI, options);


// add light id to the user database
// reference to database
let db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function() {
    console.log("Connection Successful!");
});

// create a new schema for the lights id
let lightsSchema = mongoose.Schema({
    group_name:{type: String, required: true},
    single_name:{type: String, required: true}
})

let lightSet = mongoose.model('lightSet', lightsSchema);


let lightBulbs = new lightSet({group_name:'midterm', single_name:'larry'});

lightBulbs.save(function (err, light) {
    if (err) return console.error(err);
    console.log(light.id + " saved to lights collection.");
});

