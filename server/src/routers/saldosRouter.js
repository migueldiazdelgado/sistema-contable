const Saldos = require('../controllers/saldosController');
const router = require('express').Router();

router.post('/abonar', Saldos.abonar);
router.post('/detalles', Saldos.getByPost);
router.get('/detalles', Saldos.getAll)

module.exports = router