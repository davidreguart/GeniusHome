const express = require('express');
const router = express.Router();
const homes = require('../controllers/homes.controller');
const users = require('../controllers/user.controller')

const todo = (req, res, next) => { res.send("TODO") }

router.post('/signup', users.create)


router.post('/homes', homes.create)


