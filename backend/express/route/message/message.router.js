const express = require('express');
const app = express.Router();

const {
    controllerGetAll,
    controllerGetById,
    controllerGetByRoom,
    controllerGetByUser,
    controllerCreate,
    controllerDelete,
    controllerEdit,
    
} = require('./message.controller');


// --- get ---
app.get('/',controllerGetAll);
app.get('/get-by-room/:room_id', controllerGetByRoom);
app.get('/get-by-user',controllerGetByUser);
app.get('/:id',controllerGetById);

// --- post ---
app.post('/',controllerCreate);

// --- put ---
app.put('/:id',controllerDelete);

// -- delete --
app.delete('/:id',controllerEdit);


module.exports = app