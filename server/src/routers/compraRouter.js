const Divisas = require('../controllers/divisasController');

const router = require('express').Router();

router.post('/', Divisas.comprar)
router.get('/resumen', Divisas.resumen)

module.exports = router;