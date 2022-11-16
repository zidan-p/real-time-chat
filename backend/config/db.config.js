const db_config = {
    db_name : "real_time_chat_db",
    username : "root",
    password : "",
    dbms : {
        host: 'localhost',
        dialect: 'mysql'
    },
    logging : false, //log setiap query database ke konsole
}

module.exports = {db_config}