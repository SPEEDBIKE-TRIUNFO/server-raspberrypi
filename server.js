const express = require('express');
const db = require ('./database/connection') // Importa a conexão com o banco de dados
const bodyParser = require('body-parser');
const createTable = require('./database/createTable');


const app = express();
const port = 3000;


// Middleware para processar JSON
app.use(bodyParser.json());

// Middleware para habilitar o CORS
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept'
    );
    next();
});

// Rota Status
app.get('/status', (req, res) => {
    console.log("Status: Ok");
    res.status(200).json({ status: 'OK' });
});





app.post('/mapas', (req, res) => {
    const { name, type, data } = req.body;
    const sql = `INSERT INTO mapas (name, type, data) VALUES (?, ?, ?)`;
    db.run(sql, [name, type, data], function (err) {
        if (err) {
            res.status(400).json({ error: err.message });
        } else {
            res.json({ id: this.lastID, name, type, data });
        }
    });
})


app.get('/mapas', (req, res) => {
    const sql = `SELECT * FROM mapas`;
    db.all(sql, [], (err, rows) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.json({ mapas: rows });
        }
    });
});

app.delete('/mapas/:id', (req, res) => {
    const { id } = req.params;
    const sql = `DELETE FROM mapas WHERE id = ?`;
    db.run(sql, [id], function (err) {
        if (err) {
            res.status(400).json({ error: err.message });
        } else {
            res.json({ message: 'Mapa excluído com sucesso!' });
        }
    });
});

app.put('/mapas/:id', (req, res) => {
    const { id } = req.params;
    const { name, type, data } = req.body;
    const sql = `UPDATE mapas SET name = ?, type = ?, data = ? WHERE id = ?`;
    db.run(sql, [name, type, data, id], function (err) {
        if (err) {
            res.status(400).json({ error: err.message });
        } else {
            res.json({ message: 'Mapa atualizado com sucesso!' });
        }
    });
});

app.delete('/mapas', (req, res) => {
    const sql = `DELETE FROM mapas`;
    db.run(sql, [], function (err) {
        if (err) {
            res.status(400).json({ error: err.message });
        } else {
            res.json({ message: 'Todas as mapas excluídos com sucesso!' });
        }
    });
})

createTable();
// Iniciar o servidor
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
