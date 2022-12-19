const Locatario = require('../models/Locatario');

module.exports = {
    async store(req, res){
        let locatario = await Locatario.create(req.body);
        return res.json(locatario);
        },
      
      async show(req, res){ 
          let locatario = await Locatario.findAll({
            where : {id : req.params.id}
          });
          return res.json(locatario);
        },
      
      async destroy(req,res){
            let locatario = await Locatario.findByIdAndRemove({where: {id: req.params.id}});
               return res.json(locatario);
          },
      
      async update(req,res){
            let locatario = await Locatario.Update(req.body,
              {where :
                {id : req.params.id}}); 
              return res.json(locatario);
          }

};