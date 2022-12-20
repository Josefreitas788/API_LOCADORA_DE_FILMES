const Hist_locacao = require('../models/Hist_locacao');

module.exports = {
  async show(req, res) {
    let hist_locacao = await Hist_locacao.findAll(dataValues);

    return res.json(hist_locacao);
  }
}