const db = require('./connection')




const users = () => {
    const sql = `
        CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            senha TEXT NOT NULL
        )
    `;
    db.run(sql, (err) => {
        if (err) {
            console.error('Erro ao criar a tabela "users":', err.message);
        } else {
            console.log('Tabela "users" criada ou já existe.');
        }
    });
};

const mapas = () => {
    const sql = `
        CREATE TABLE IF NOT EXISTS mapas (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            id_users INTEGER NOT NULL,
            name TEXT NOT NULL,
            type TEXT NOT NULL,
            data TEXT NOT NULL,
            FOREIGN KEY (id_users) REFERENCES users (id)
        )
    `;
    db.run(sql, (err) => {
        if (err) {
            console.error('Erro ao criar a tabela "mapas":', err.message);
        } else {
            console.log('Tabela "mapas" criada ou já existe.');
        }
    });
};

const deleteTableUsers = () => {
    const sql = `
        DROP TABLE IF EXISTS users;
    `;
    db.run(sql, (err) => {
        if (err) {
            console.error('Erro ao excluir a tabela "users":', err.message);
        } else {
            console.log('Tabela "users" excluída com sucesso!');
        }
    });
};

const deleteTableMapas    = () => {
    const sql = `
        DROP TABLE IF EXISTS mapas;
    `;
    db.run(sql, (err) => {
        if (err) {
            console.error('Erro ao excluir a tabela "mapas":', err.message);
        } else {
            console.log('Tabela "mapas" excluída com sucesso!');
        }
    });
};




module.exports = {
    mapas,
    users,
    deleteTableUsers,
    deleteTableMapas
}