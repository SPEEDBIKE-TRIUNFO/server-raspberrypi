const db = require ('./connection') // Importa a conexão com o banco de dados


const createTable = () => {
    const sql = `
        CREATE TABLE IF NOT EXISTS mapas (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            type TEXT NOT NULL,
            data TEXT NOT NULL
        )
    `;
    db.run(sql, (err) => {
        if (err) {
            console.error('Erro ao criar a tabela:', err.message);
        } else {
            console.log('Tabela "mapas" criada ou já existe.');
        }
    });
};

module.exports = createTable