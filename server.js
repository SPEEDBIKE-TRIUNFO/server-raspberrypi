const express = require('express');
const db = require ('./database/connection') // Importa a conexão com o banco de dados
const bodyParser = require('body-parser');
const createTable = require('./database/createTable');


const app = express();
const port = 3000;


// Middleware para processar JSON
app.use(bodyParser.json());

// Rota para listar todos os usuários (GET /users)
app.get('/users', (req, res) => {
    const sql = `SELECT * FROM users`;
    db.all(sql, [], (err, rows) => {
        if (err) {
            
            res.status(500).json({ error: err.message });
        } else {
            res.json({ users: rows });
        }
    });
});

// Rota para adicionar um usuário (POST /users)
app.post('/users', (req, res) => {
    const { name, email } = req.body;
    const sql = `INSERT INTO users (name, email) VALUES (?, ?)`;
    db.run(sql, [name, email], function (err) {
        if (err) {
            res.status(400).json({ error: err.message });
        } else {
            res.json({ id: this.lastID, name, email });
        }
    });
});
createTable();
// Iniciar o servidor
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
