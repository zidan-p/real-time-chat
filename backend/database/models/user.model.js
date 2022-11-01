const { DataTypes } = require('sequelize');


module.exports = (sequelize) => {
	sequelize.define('user', {

		id: {
			allowNull: false,
			autoIncrement: true,
			primaryKey: true,
			type: DataTypes.INTEGER
		},
        name : {
            allowNull: false,
            type: DataTypes.STRING
        },
        description : {
            allowNull: true,
            type: DataTypes.TEXT
        }
	});
};