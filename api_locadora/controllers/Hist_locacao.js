const Hist_locacao = require('../models/Hist_locacao');

module.exports = {
     async show(req, res){ 
         let hist_locacao = await Hist_locacao.findAll({
           where : {id : req.params.id}
         });
         return res.json(hist_locacao);
       }
    }