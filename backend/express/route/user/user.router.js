const express = require('express');
const app = express.Router();

const {
    controllerGetAll,
    controllerGetById,
    controllerGetFull,
    controllerGetByRoom,
    controllerCreate,
    controllerEdit,
    controllerDelete,
    controllerAddRoom,
    controllerAddMessage,
    controllerBulkCreate,
    controllerRemoveMessage,
    controllerRemoveRoom
} = require('./user.controller');


// --- get ---
app.get('/',controllerGetAll); // V
app.get('/full',controllerGetFull); // V
app.get('/room/:room_id',controllerGetByRoom); // V
app.get('/:id',controllerGetById); // V


// --- post ---
app.post('/',controllerCreate); // V
app.post('/bulk-create',controllerBulkCreate) // V 

// --- put ---
app.put('/add-room/:user_id',controllerAddRoom); // V
app.put('/add-message/:user_id', controllerAddMessage); // ? 
app.put('/remove-message/:user_id',controllerRemoveMessage);// ?
app.put('/remove-room/:user_id',controllerRemoveRoom);//V
app.put('/:id',controllerEdit); // V

// --- delete ---
app.delete('/:id', controllerDelete);
//TODO: config association for deleting user

module.exports = app;
