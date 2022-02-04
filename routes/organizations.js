var router = require('express').Router();

router.get('/:id', require('../controllers/organizations/getOrganization'));

module.exports = router;