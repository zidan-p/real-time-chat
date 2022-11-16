const { Sequelize } = require('sequelize');
const { applyRelation } = require('./extra-setup')
const { db_config } = require('./../config/db.config')

// define sequelize
const sequelize = new Sequelize(
	db_config.db_name,
	db_config.username,
	db_config.password,
	{
		host : db_config.dbms.host,
		dialect : db_config.dbms.dialect,
		logging : db_config.logging
	}
);

const modelDefiners = [
	require('./models/message.model'),
	require('./models/room.model'),
	require('./models/user.model'),
];

// We define all models according to their files.
for (const modelDefiner of modelDefiners) {
	modelDefiner(sequelize);
}

//sync database 
async function syncDb(){
	await sequelize.sync()
	// await sequelize.sync({force:true})
}

syncDb();

//terapkan setup tambahan
applyRelation(sequelize)

//testing
async function testRun(){
	await sequelize.models.room.create({
		name : "baru",
		description : "ini adalah deskripsi dari room baru"
	})
}


// We export the sequelize connection instance to be used around our app.
module.exports = sequelize;