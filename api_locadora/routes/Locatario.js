const express = require('express');
const router = express.Router('');
const LocatarioController = require('../controllers/Locatario');

router.post('/', LocatarioController.store);
router.get('/:id', LocatarioController.show);
router.delete('/:id', LocatarioController.destroy);
router.put('/', LocatarioController.update);

module.exports = router;
