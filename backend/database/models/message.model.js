const { DataTypes } = require('sequelize');


module.exports = (sequelize) => {
	sequelize.define('message', {
        message : {
            allowNull: false,
            type: DataTypes.STRING
        },
        timestamp : {
            allowNull : true,
            type: DataTypes.TIME
        }
	});
};