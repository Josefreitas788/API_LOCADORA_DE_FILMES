const express = require('express');
const router = express.Router('');
const LocacaoController = require('../controllers/Locacao');

router.post('/locacao', LocacaoController.store);
router.get('/locacao/:id', LocacaoController.show);
router.delete('/locacao/:id', LocacaoController.destroy);
router.put('/locacao/:id', LocacaoController.update);

module.exports = router;