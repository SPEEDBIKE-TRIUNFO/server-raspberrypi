const express = require('express');
const bodyParser = require('body-parser');
const createTable = require('./database/createTable');
const routes = require('./routes/mapas');
const cors = require('cors');

const app = express();
const port = 3001;

// Middleware para processar JSON
app.use(bodyParser.json());
app.use(cors());

// Rota Status
app.get('/status', (req, res) => {
    console.log("Status: Ok");
    res.status(200).json({ status: 'OK' });
});

app.use('/api', routes);


createTable.mapas();
createTable.users();
// createTable.deleteTableUsers();
// createTable.deleteTableMapas();

// Iniciar o servidor
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
