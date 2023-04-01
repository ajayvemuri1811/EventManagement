const express = require('express')
const router = express.Router();
const {getAllUsers, createUser, loginuser} = require('../Controller/userController')

router.post('/login',loginuser);
router.post('/',createUser);

router.get('/', getAllUsers);

module.exports = router; 