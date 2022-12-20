const express = require('express');
const router = express.Router('');
const Hist_locacaoController = require('../controllers/Hist_locacao');

router.get('/', Hist_locacaoController.show);


module.exports = router;
