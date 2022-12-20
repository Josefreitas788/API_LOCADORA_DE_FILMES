const {DataTypes } = require("sequelize");
const db = require('./connection_db');

const Filme = db.define("filme",{
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
 },
  {
    freezeTableName: true,
    timestamps: false
  }
);


module.exports = Filme;
