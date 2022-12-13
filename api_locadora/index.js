const express = require('express');
const app = express();
const sequelize = require('./models/connection_db');


sequelize.authenticate().then(() => {
  console.log("Success!");
  }).catch((err) => {
    console.log(err);
  });

app.get('/', (req,res) => {
  res.send("Hello");
});

app.listen(process.env.port || 3000);
console.log('Web Server is listening at port '+ (process.env.port || 3000));
