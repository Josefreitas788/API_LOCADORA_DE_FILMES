const his_locacao = require('../models/hist_locacao');

module.exports = {
     async show(req, res){ 
         let his_locacao = await his_locacao.findAll({
           where : {id : req.params.id}
         });
         return res.json(his_locacao);
       }
    }