const {Sequelize} = require('sequelize');

// var sequelize = new Sequelize('postgres://namlhwumxschsb:61ef3085f22ae14ce13439bb7cdc911d62e102c1fc2b3800688a35bada812be6@ec2-3-219-229-143.compute-1.amazonaws.com:5432/d5t5huhnt06dca');
const host = 'tuffi.db.elephantsql.com'
const database = 'bvdrmbjo'
const user = 'bvdrmbjo'
const port = '5432'
const  password ='IR00Zp1LC37VYg2XTF8KsukFu3QxkFIA'
const sequelize = new Sequelize(database, user, password, {
  host,
  port,
  dialect: "postgres"
})



module.exports = sequelize;
