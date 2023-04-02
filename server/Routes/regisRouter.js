const express = require('express')
const router = express.Router();
const {getCric, createCric} = require('../Controller/cricController')

router.post('/',createCric);
router.get('/', getCric);

module.exports = router; 