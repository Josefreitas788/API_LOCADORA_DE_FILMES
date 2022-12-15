const Filme = require('../models/Filme');

module.exports = {

  async store(req, res) {
    const Filme = await Filme.create(req.body);
    return res.json({ message: 'Filme '+ Filme + ' cadastrado com sucesso!' });
  },

  async show(req, res) {
    const Filme = await Filme.findById(req.params.id);
    
    return res.json(Filme);
  },

  async destroy(req, res) {
    const Filme = await Filme.findByIdAndRemove(req.params.id);

    return res.json({ message: 'Filme ' + Filme + ' removido com sucesso!' });
  }

  async update(req, res) {
    const Filme = await Filme.Update(req.body,
      { where: { id: req.params.id } }
    );
    return res.json({ message: 'Filme ' + Filme + ' atualizado com sucesso!' });
  };  
