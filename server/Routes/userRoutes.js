const express = require('express')
const router = express.Router();
const {getAllUsers, createUser} = require('../Controller/userController')

router.post('/',createUser);
router.get('/', getAllUsers);

module.exports = router; 