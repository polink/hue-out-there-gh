'use strict';

const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

require('dotenv').config();

const user = new mongoose.Schema({
  username: {type:String, required:true, unique:true},
  password: {type:String, required:true}
});

user.pre('save', function(next) {
  bcrypt.hash(this.password,10)
    .then(hashedPassword => {
      this.password = hashedPassword;
      next();
  }).catch(error => {throw err;});
});

user.statics.authenticateBasic = function(auth) {
  let query = {username:auth.username};
  return this.findOne(query)
    .then(user => user && user.comparePassword(auth.password))
  .catch(console.error);
};

user.methods.comparePassword = function(password) {
  return bcrypt.compare(password, this.password)
    .then(valid => valid ? this : null);
};

user.methods.generateToken = function() {
  let tokenData = {
    id: this._id,
  };
  return jwt.sign(tokenData, process.env.SECRET);
};

module.exports = mongoose.model('user', user);
