const { DataTypes } = require('sequelize');


module.exports = (sequelize) => {
	sequelize.define('message', {
        message : {
            allowNull: false,
            type: DataTypes.STRING
        },
        timestamp : {
            type: DataTypes.TIME
        }
	});
};