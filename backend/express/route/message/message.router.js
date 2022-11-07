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
    controllerBulkCreate,
} = require('./message.controller');


// --- get ---
app.get('/', controllerGetAll); // apakah ini perlu??? // V
app.get('/get-by-room/:room_id', controllerGetByRoom); // V
app.get('/get-by-user/:user_id', controllerGetByUser); // V
app.get('/:id', controllerGetById);

// --- post ---
app.post('/', controllerCreate); // V
app.post('/bulk-create', controllerBulkCreate); // V

// --- put ---
app.put('/:id', controllerEdit); // V

// -- delete --
app.delete('/:id',controllerDelete); // V


module.exports = app