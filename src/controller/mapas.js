const db = require ('../database/connection') 


async function getMapas(req, res) {
    const sql = `SELECT * FROM mapas`;
    db.all(sql, [], (err, rows) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            console.log(rows);
            res.status(200).json({ mapas: rows });
        }
    });
}


async function createMapas(req, res) {
    const { name, type, data, id_users } = req.body;
    console.log(name, type, data, id_users)
    const sql = `INSERT INTO mapas (name, type, data, id_users) VALUES (?, ?, ?, ?)`;
    db.run(sql, [name, type, data, id_users], function (err) {
        if (err) {
            console.log(err);
            res.status(400).json({ error: err.message });
        } else {
            console.log("Created map: ", name, type,data)
            res.status(201).json({ id: this.lastID, name, type, data });
        }
    });
   

}   

async function deleteMapas(req, res) {
    const { id } = req.params;
    const sql = `DELETE FROM mapas WHERE id = ?`;
    db.run(sql, [id], function (err) {
        if (err) {
            res.status(400).json({ error: err.message });
        } else {
            res.status(200).json({ message: 'Mapa excluído com sucesso!' });
        }
    });
}   

async function updateMapas(req, res) {
    const { id } = req.params;
    const { name, type, data } = req.body;
    const sql = `UPDATE mapas SET name = ?, type = ?, data = ? WHERE id = ?`;
    db.run(sql, [name, type, data, id], function (err) {
        if (err) {
            res.status(400).json({ error: err.message });
        } else {
            res.status(200).json({ message: 'Mapa atualizado com sucesso!' });
        }
    });
}   

async function deleteAllMapas(req, res) {
    const sql = `DELETE FROM mapas`;
    db.run(sql, [], function (err) {
        if (err) {
            res.status(400).json({ error: err.message });
        } else {
            res.status(204).json({ message: 'Todos os mapas excluídos com sucesso!' });
        }
    });
}


module.exports = {
    getMapas,
    createMapas,
    deleteMapas,
    updateMapas,
    deleteAllMapas
}
