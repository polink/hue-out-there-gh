'use strict';

const express = require('express');
const authRouter = express.Router();

const User = require('./user-model');
const auth = require('./middleware');

authRouter.post('/signup', (req, res, next) => {

   let user = new User(req.body);

   return user.save()
   .then(user => {
     req.token = user.generateToken();
     req.user = user;
     res.set('token', req.token);
     res.cookie('auth', req.token);
     res.send(req.token);
     res.send()
    }).catch(next);
});


authRouter.post('/signin', auth, (req, res, next) => {
    res.cookie('auth', req.token);
    res.send(`Hello ${req.user.username}! \n\n Below Are Directions \n\n Turn On Lights \n 1 - "node bridge.js 1on"
 2 - "node bridge.js 2on" \n 6 - "node bridge.js 6on" \n\n Turn Off Lights \n 1 - "node bridge.js 1off" 
 2 - "node bridge.js 2off" \n 6 - "node bridge.js 6off" \n\n Turn On All Lights - "node bridge.js groupon" 
    \n Turn Off All Lights"node bridge.js groupoff"`);
});


authRouter.get('/light/:id/on', (req, res) => {
    let id = req.params.id;
    api.setLightState(id, state.on())
        .then(displayResults)
        .fail(displayError)
        .done();
    res.send(`Light ${id} Is On`)
});


module.exports = authRouter;
