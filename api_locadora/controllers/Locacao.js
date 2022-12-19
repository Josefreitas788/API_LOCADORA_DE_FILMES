const Locacao = require('../models/Locacao');

module.exports = {
    async store(req, res){
        let locacao = await Locacao.create(req.body);
        return res.json(locacao);
        },
      
      async show(req, res){ 
          let locacao = await Locacao.findAll({
            where : {id : req.params.id}
          });
          return res.json(locacao);
        },
      
      async destroy(req,res){
            let locacao = await Locacao.findByIdAndRemove({where: {id: req.params.id}});
               return res.json(locacao);
          },
      
      async update(req,res){
            let locacao = await Locacao.Update(req.body,
              {where :
                {id : req.params.id}}); 
              return res.json(locacao);
          }

};