const Sequelize = require('sequelize');

const sequelize = new Sequelize("emerson","root","132281lisa$$", {
  host: 'localhost',
  dialect: 'mysql'

});
sequelize.authenticate()
.then(function() {
console.log("conexão com banco de dados realiazido com sucesso!");

}) .catch(function(){
  console.log('erro: conexão com banco de dados não realizada com sucesso!');
});



module.exports = sequelize;