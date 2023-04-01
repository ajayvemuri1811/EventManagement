const express = require('express')
const router = express.Router();
const {loginuser} = require('../Controller/loginController')

router.post('/',loginuser);

module.exports = router; 