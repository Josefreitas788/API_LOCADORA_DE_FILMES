const {sequelize, DataTypes} = require('sequelize');

const Locatario = sequelize.define('locatario', {
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

