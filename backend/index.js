const app = require('./express/app');
const sequelize = require('./database');
const io = require('./socket');

const PORT_EXPRESS = 3004;
const PORT_SOCKET = 3006;

async function assertDatabaseConnectionOk() {
	console.log(`Checking database connection...`);
	try {
		await sequelize.authenticate();
		console.log('Database connection OK!');
	} catch (error) {
		console.log('Unable to connect to the database:');
		console.log(error.message);
		process.exit(1);
	}
}

async function init() {
	await assertDatabaseConnectionOk();
	console.log(`Starting Sequelize, Express and Socket io example on port ${PORT_EXPRESS}...`);
	io.listen(PORT_SOCKET)
	console.log(`io server started on port ${PORT_SOCKET}.`);
	app.listen(PORT_EXPRESS, () => {
		console.log(`Express server started on port ${PORT_EXPRESS}. "localhost:${PORT_EXPRESS}"`);
	});
}

init();