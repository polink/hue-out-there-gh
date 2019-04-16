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
    res.send(req.token);

});


// authRouter.put(`http://172.16.8.233/api/3RcWD2DoxBwDfmLquhTi8bVpXh7IzhLOw8GpfCe4/lights/:id/state`, (req, res) => {
//         if (err) {
//             res.send({'error':'An error has occurred'});
//         } else {
//             res.send({"on":true} );
//
//     }
// })


module.exports = authRouter;
