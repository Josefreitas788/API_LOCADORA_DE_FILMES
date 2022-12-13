const { sequelize, DataTypes } = require("sequelize");

const Filme = sequelize.define("filme",{
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
