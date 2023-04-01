const express = require('express')
const router = express.Router();
const {verifyUser} = require('../Controller/loginController')

router.post('/',verifyUser);

module.exports = router;