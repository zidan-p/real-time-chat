const { DataTypes } = require('sequelize');


module.exports = (sequelize) => {
	sequelize.define('room', {

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
        },
        // creator : {
        //     allowNull : true,
        //     type: DataTypes.INTEGER
        // }
	});
};