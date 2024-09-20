const db = require ('./connection') // Importa a conexão com o banco de dados


const createTable = () => {
    const sql = `
        CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            email TEXT NOT NULL UNIQUE
        )
    `;
    db.run(sql, (err) => {
        if (err) {
            console.error('Erro ao criar a tabela:', err.message);
        } else {
            console.log('Tabela "users" criada ou já existe.');
        }
    });
};

module.exports = createTable