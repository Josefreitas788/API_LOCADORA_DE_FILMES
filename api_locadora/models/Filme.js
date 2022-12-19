const {DataTypes } = require("sequelize");
const database = require('./connection_db');

const Filme = database.define("filme",{
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nome: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  lancamento: {
    type: DataTypes.DATE,
  }
});


module.exports = Filme;
