const express = require('express');
const { addNominee } = require('../controllers/nomineeController');

const router = express.Router();

router.post('/', addNominee);

module.exports = router;
