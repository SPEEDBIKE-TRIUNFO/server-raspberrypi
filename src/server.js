const express = require('express');
const bodyParser = require('body-parser');
const createTable = require('./database/createTable');
const routes = require('./routes/mapas');


const app = express();
const port = 3000;

// Middleware para processar JSON
app.use(bodyParser.json());

// Rota Status
app.get('/status', (req, res) => {
    console.log("Status: Ok");
    res.status(200).json({ status: 'OK' });
});

app.use('/api', routes);


createTable();

// Iniciar o servidor
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
