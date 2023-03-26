const express = require('express')
const router = express.Router();
const {getAllUsers, createUser} = require('../Controller/userController')

router.get('/', getAllUsers);
router.post('/',createUser);

module.exports = router; 