const express = require('express');
const router = express.Router('');
const FilmeController = require('../controllers/Filme');

router.post('/filme', FilmeController.store);
router.get('/filme/:id', FilmeController.show);
router.delete('/filme/:id', FilmeController.destroy);
router.put('/filme/:id', FilmeController.update);

module.exports = router;