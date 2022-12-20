const express = require('express');
const router = express.Router('');
const LocacaoController = require('../controllers/Locacao');

router.post('/', LocacaoController.store);
router.get('/:id', LocacaoController.show);
router.delete('/:id', LocacaoController.destroy);
router.put('/', LocacaoController.update);

module.exports = router;
