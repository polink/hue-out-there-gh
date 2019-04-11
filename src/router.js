'use strict';

const express = require('express');
const router = express.Router();

router.post('/signup', (req, res, next) => {
    res.sendStatus(200);
})

router.post('/signin', (req, res, next) => {
    res.sendStatus(200);
})

module.exports = router;