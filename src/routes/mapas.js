
const mapasController = require('../controller/mapas');
const usersController = require('../controller/users');
const express = require('express');


const routes = express.Router();

routes.get('/mapas/:id/:mapType', mapasController.getMapas);

routes.post('/mapas', mapasController.createMapas);
routes.delete('/mapas/:id', mapasController.deleteMapas);
routes.put('/mapas/:id', mapasController.updateMapas);
    
routes.post('/users', usersController.createUsers);


routes.delete('/mapas', mapasController.deleteAllMapas);



module.exports = routes;