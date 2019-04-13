'use strict';

const express = require('express');
const router = express.Router();

const User = require('./user-model');

router.post('/signup', (req, res) => {

   let user = new User(req.body);

   return user.save()
   .then(user => {
     res.sendStatus(200).send('signup complete.');
    }).catch(err => {
        res.status(400).send('Unable to save');
    });
});

router.post('/signin', (req, res) => {
    console.log(req.body.username);
    console.log(User);
    res.sendStatus(200);
})

module.exports = router;
