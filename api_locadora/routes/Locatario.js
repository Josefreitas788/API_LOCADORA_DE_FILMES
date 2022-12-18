const express = require('express');
const router = express.Router('');
const LocatarioController = require('../controllers/Locatario');

router.post('/locatario', LocatarioController.store);
router.get('/locatario/:id', LocatarioController.show);
router.delete('/locatario/:id', LocatarioController.destroy);
router.put('/locatario/:id', LocatarioController.update);

module.exports = router;