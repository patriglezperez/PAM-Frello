var router = require('express').Router();

router.use('/organizations', require('./organizations'));

module.exports = router;

