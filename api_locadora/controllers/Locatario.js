const Locatario = require('../models/locatario');

module.exports = {
    async store(req, res){
        let Locatario = await Locatario.create(req.body);
        return res.json(Locatario);
        },
      
      async show(req, res){ 
          let Locatario = await Locatario.findAll({
            where : {id : req.params.id}
          });
          return res.json(Locatario);
        },
      
      async destroy(req,res){
            let Locatario = await Locatario.findByIdAndRemove({where: {id: req.params.id}});
               return res.json(Locatario);
          },
      
      async update(req,res){
            let Locatario = await Locatario.Update(req.body,
              {where :
                {id : req.params.id}}); 
              return res.json(Locatario);
          }

};