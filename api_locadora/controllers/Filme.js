const Filme = require('../models/Filme');

module.exports = {

  async store(req, res) {
    try {
      let filme = await Filme.create(req.body);
      return res.json({ filme });
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  },

  async show(req, res) {
    try {
      let filme = await Filme.findByPk(req.params.id);
      return res.json(filme);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  },

  async destroy(req, res) {
    try {
      let filme = await Filme.destroy({
        where: {
          id: req.params.id
        }
      });

      return res.json({ filme });
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  },

  async update(req, res) {
    try {
      let filme = await Filme.update(req.body, {
        where: {
          id: req.body.id
        }
      });
      return res.json({ filme })
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }
};  
