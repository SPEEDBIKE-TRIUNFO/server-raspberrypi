const db = require ('../database/connection')

async function createUsers(req, res) {
    const { name, senha } = req.body;
    const sql = `INSERT INTO users (name, senha) VALUES (?, ?)`;
    db.run(sql, [name, senha], function (err) {
        if (err) {
            res.status(400).json({ error: err.message });
        } else {
            res.status(201).json({ id: this.lastID, name, senha });
        }
    });
}

module.exports = {
    createUsers
}