const express = require('express')
const router = express.Router();
const {getfoot, createfoot} = require('../Controller/footController')

router.post('/',createfoot);
router.get('/', getfoot);

module.exports = router; 