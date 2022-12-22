const Locatario = require('../models/Locatario');

module.exports = {
  async store(req, res) {
    try {
      let locatario = await Locatario.create(req.body);
      return res.json(locatario);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  },

  async show(req, res) {
    try {
      let locatario = await Locatario.findByPk(req.params.id);
      return res.json(locatario);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  },

  async destroy(req, res) {
    try {
      let locatario = await Locatario.destroy({
        where: {
          id: req.params.id
        }
      });
      return res.json(locatario);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  },

  async update(req, res) {
    try {
      let locatario = await Locatario.update(req.body, {
        where: {
          id: req.body.id
        }
      });
      return res.json(locatario);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }

};
