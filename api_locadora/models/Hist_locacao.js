const {DataTypes} = require('sequelize');
const database = require('./connection_db');
const Filme = require('./Filme');
const Locatario = require('./Locatario');

const Hist_locacao = database.define('hist_locacao', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
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
    type: DataTypes.text,
    allowNull: false
  }
});

module.exports = Hist_locacao;
