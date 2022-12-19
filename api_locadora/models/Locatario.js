const {DataTypes} = require('sequelize');
const database = require('./connection_db');

const Locatario = database.define('locatario', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nome: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  cpf: {
    type: DataTypes.TEXT,
    allowNull: false
  }
});

module.exports = Locatario;

