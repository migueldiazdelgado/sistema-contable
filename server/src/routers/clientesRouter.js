const router = require('express').Router();
const clientesController = require('../controllers/clientesController');

router.post('/create', clientesController)

module.exports = router;