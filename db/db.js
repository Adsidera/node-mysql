const Sequelize = require('sequelize');

const sequelize = new Sequelize('study', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
});

module.exports = sequelize;
global.exports = sequelize;