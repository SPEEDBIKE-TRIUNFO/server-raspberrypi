
const mapasController = require('../controller/mapas');
const express = require('express');


const routes = express.Router();

routes.get('/mapas', mapasController.getMapas);
routes.post('/mapas', mapasController.createMapas);
routes.delete('/mapas/:id', mapasController.deleteMapas);
routes.put('/mapas/:id', mapasController.updateMapas);
    

routes.delete('/mapas', mapasController.deleteAllMapas);



module.exports = routes;