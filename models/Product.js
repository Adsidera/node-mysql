const Sequelize = require('sequelize');

module.exports = global.sequelize.define('Product', {
    id : {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        autoincrement: true,
        primaryKey: true,
    },
    
    name: Sequelize.String(300),
    description: Sequelize.String(300),
});