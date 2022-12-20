const Locatario = require('../models/Locatario');

module.exports = {
  async store(req, res) {
    let locatario = await Locatario.create(req.body);
    return res.json(locatario);
  },

  async show(req, res) {
    let locatario = await Locatario.findByPk(req.params.id);

    return res.json(locatario);
  },

  async destroy(req, res) {
    let locatario = await Locatario.destroy({
      where: {
        id: req.params.id
      }
    });
    return res.json(locatario);
  },

  async update(req, res) {
    let locatario = await Locatario.update(req.body, { 
      where: { 
        id: req.body.id 
      } 
    });
    return res.json(locatario);
  }

};