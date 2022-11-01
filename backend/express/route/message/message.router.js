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
app.get('/',controllerGetAll); // apakah ini perlu???
app.get('/get-by-room/:room_id', controllerGetByRoom); 
app.get('/get-by-user/:user_id',controllerGetByUser);
app.get('/:id',controllerGetById);

// --- post ---
app.post('/',controllerCreate);
app.post('/bulk-create',controllerBulkCreate); // V

// --- put ---
app.put('/:id',controllerEdit);

// -- delete --
app.delete('/:id',controllerDelete);


module.exports = app