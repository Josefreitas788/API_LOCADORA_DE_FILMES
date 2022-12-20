const express = require('express');
const router = express.Router('');
const FilmeController = require('../controllers/Filme');

router.post('/', FilmeController.store);
router.get('/:id', FilmeController.show);
router.delete('/:id', FilmeController.destroy);
router.put('/', FilmeController.update);

module.exports = router;
