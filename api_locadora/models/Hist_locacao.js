const {DataTypes} = require('sequelize');
const database = require('./connection_db');
const Filme = require('./Filme');
const Locatario = require('./Locatario');
const Locacao = require('./Locacao');

const Hist_locacao = database.define('hist_locacao', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  id_locacao: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Locacao,
      key: 'id'
    }
  },
  id_filme: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Filme,
      key: 'id'
    } 
  },
  id_locatario: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Locatario,
      key: 'id'
    }
  },
  data_inicio_locacao: {
    type: DataTypes.DATE
  },
  data_fim_locacao: {
    type: DataTypes.DATE
  },
  ind_entregue: {
    type: DataTypes.CHAR(1),
    allowNull: false
  }
 },
  {
    freezeTableName: true,
    timestamps: false
  }
);

module.exports = Hist_locacao;
