const Filme = require('../models/Filme');

module.exports = {

  async store(req, res) {
    let filme = await Filme.create(req.body);
    return res.json({ filme });
  },

  async show(req, res) {
    let filme = await Filme.findByPk(req.params.id);

    return res.json(filme);
  },

  async destroy(req, res) {
    let filme = await Filme.destroy({
      where: {
        id: req.params.id
      }
    });

    return res.json({ filme });
  },

  async update(req, res) {
    let filme = await Filme.update(req.body, {
      where: { 
        id: req.body.id 
      } 
  });
    return res.json({ filme })
    }
  };  
