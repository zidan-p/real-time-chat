const express = require('express');
const app = express.Router();

const {
    controllerGetAll,
    controllerGetById,
    controllerGetFull,
    controllerGetByUser,
    controllerGetByCreator,
    controllerCreate,
    controllerEdit,
    controllerDelete,
    controllerAddUser,
    controllerAddMessage,
    controllerBulkCreate,
    controllerSetCreator,
    controllerRemoveMessage,
    controllerRemoveUser

} = require('./room.controller');

// --- get ---
app.get('/',controllerGetAll); //v
app.get('/full',controllerGetFull); //v
app.get('/user/:user_id',controllerGetByUser); // ?
app.get('/creator/:creator',controllerGetByCreator); //V
app.get('/:id',controllerGetById);//v

// --- post ---
app.post('/',controllerCreate); //V
app.post('/bulk-create',controllerBulkCreate) //V

// --- PUT ---
app.put('/:id',controllerEdit); //V
app.put('/add-user/:room_id',controllerAddUser); // V
app.put('/add-message/:room_id', controllerAddMessage);// ?
app.put('/remove-user/:room_id',controllerRemoveUser);// V
app.put('/remove-message/:room_id',controllerRemoveMessage); // ?
app.put('/set-creator/:room_id', controllerSetCreator); // v

// --- delete ---
app.delete('/:id', controllerDelete); //V



module.exports = app;
