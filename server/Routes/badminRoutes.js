const express = require('express')
const router = express.Router();
const {getBadmin, createBadmin} = require('../Controller/badminController')

router.post('/',createBadmin);
router.get('/', getBadmin);

module.exports = router; 