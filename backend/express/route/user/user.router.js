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
app.get('/',controllerGetAll);
app.get('/:id',controllerGetById);
app.get('/full',controllerGetFull);
app.get('/room/:user_id',controllerGetByRoom);


// --- post ---
app.post('/',controllerCreate);
app.post('/bulk-create',controllerBulkCreate)

// --- put ---
app.put('/:id',controllerEdit);
app.put('/add-room/:user_id',controllerAddRoom);
app.put('/add-message/:user_id', controllerAddMessage);
//TODO: + remove-message, + remove-room
app.put('/remove-message/:user_id',controllerRemoveMessage);
app.put('/remove-room/:user_id',controllerRemoveRoom);

// --- delete ---
app.delete('/:id', controllerDelete);


module.exports = app;
