const Sequelize = require('sequelize');
const db = require('./db');

const User = db.define('users', {
  id:{
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allownull: false,
    primaryKey: true
  },
  name: {
    type: Sequelize.STRING,
    allownull: false, 
  },
  email: {
    type: Sequelize.STRING,
    allownull: false, 
  }
});

//User.sync(); //Criar a tabela 

module.exports = User;

