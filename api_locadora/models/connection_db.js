const {Sequelize} = require('sequelize');

const host = 'tuffi.db.elephantsql.com'
const database = 'bvdrmbjo'
const user = 'bvdrmbjo'
const port = '5432'
const  password ='IR00Zp1LC37VYg2XTF8KsukFu3QxkFIA'
const sequelize = new Sequelize(database, user, password, {
  host,
  port,
  dialect: "postgres",
  //native: true,
  ssl: true, 
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false
  }
}});



module.exports = sequelize;
