const Locacao = require('../models/locacao');

module.exports = {
    async store(req, res){
        let Locacao = await Locacao.create(req.body);
        return res.json(Locacao);
        },
      
      async show(req, res){ 
          let Locacao = await Locacao.findAll({
            where : {id : req.params.id}
          });
          return res.json(Locacao);
        },
      
      async destroy(req,res){
            let Locacao = await Locacao.findByIdAndRemove({where: {id: req.params.id}});
               return res.json(Locacao);
          },
      
      async update(req,res){
            let Locacao = await Locacao.Update(req.body,
              {where :
                {id : req.params.id}}); 
              return res.json(Locacao);
          }

};