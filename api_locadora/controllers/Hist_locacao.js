const Hist_locacao = require('../models/Hist_locacao');

module.exports = {
  async show(req, res) {
    try {
      let hist_locacao = await Hist_locacao.findAll();

      return res.json(hist_locacao);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }
}
