const Locacao = require('../models/Locacao');

module.exports = {
  async store(req, res) {
    try {
      let locacao = await Locacao.create(req.body);
      return res.json(locacao);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  },

  async show(req, res) {
    try {
      let locacao = await Locacao.findByPk(req.params.id);
      return res.json(locacao);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  },

  async destroy(req, res) {
    try {
      let locacao = await Locacao.destroy({
        where: {
          id: req.params.id
        }
      });
      return res.json(locacao);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  },

  async update(req, res) {
    try {
      let locacao = await Locacao.update(req.body, {
        where: {
          id: req.body.id
        }
      });
      return res.json(locacao);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }
};
