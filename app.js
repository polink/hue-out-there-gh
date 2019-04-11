'use strict';
// prepare the express app
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

// app.level.mw
const app = express();
app.use(cors());
app.use(morgan('dev'));

app.use(express.json());
app.use(express.urlencoded({extended:true}));

// if server is already running
let isRunning = false;

module.exports = {
  server: app,
  start: (port) => {
    if (!isRunning) {
      app.listen(port, () => {
        isRunning = true;
        console.log(`server Up on ${port}`);
      });
    } else {
      console.log('Server is already running');
    }
  },
};

