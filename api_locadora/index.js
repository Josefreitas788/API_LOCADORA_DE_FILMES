const express = require('express');
const app = express();
const sequelize = require('./models/connection_db');
const bodyParser = require('body-parser');
const Filme = require('./routes/Filme');
const Hist_locacao = require('./routes/Hist_locacao');
const Locacao = require('./routes/Locacao');
const Locatario = require('./routes/Locatario');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


sequelize.authenticate().then(() => {
  console.log("Success!");
  }).catch((err) => {
    console.log(err);
  });



app.listen(process.env.port || 3000);
console.log('Web Server is listening at port '+ (process.env.port || 3000));


app.use('/filme', Filme);
app.use('/hist_locacao', Hist_locacao);
app.use('/locacao', Locacao);
app.use('/locatario', Locatario);
