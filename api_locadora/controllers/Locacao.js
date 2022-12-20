const Locacao = require('../models/Locacao');

module.exports = {
  async store(req, res) {
    let locacao = await Locacao.create(req.body);
    return res.json(locacao);
  },

  async show(req, res) {
    let locacao = await Locacao.findByPk(req.params.id);

    return res.json(locacao);
  },

  async destroy(req, res) {
    let locacao = await Locacao.destroy({
      where: {
        id: req.params.id
      }
    });
    return res.json(locacao);
  },

  async update(req, res) {
    let locacao = await Locacao.update(req.body, { 
      where: { 
        id: req.body.id 
      } 
    });
    return res.json(locacao);
  }

};
