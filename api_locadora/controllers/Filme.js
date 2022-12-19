const Filme = require('../models/Filme');

module.exports = {

  async store(req, res) {
    let filme = await Filme.create(req.body);
    return res.json({ message: 'Filme '+ filme + ' cadastrado com sucesso!' });
  },

  async show(req, res) {
    let filme = await Filme.findById(req.params.id);
    
    return res.json(filme);
  },

  async destroy(req, res) {
    let filme = await Filme.findByIdAndRemove(req.params.id);

    return res.json({ message: 'Filme ' + filme + ' removido com sucesso!' });
  },

  async update(req, res) {
    let filme = await Filme.Update(req.body,
      { where: { id: req.params.id } }
    );
    return res.json({ message: 'Filme ' + filme + ' atualizado com sucesso!' })
    }
  };  
