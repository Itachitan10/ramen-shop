const express = require('express'); 
const routes = express.Router();
const query = require('../db/database');

routes.post('/login', async (req, res) => {
    const { name, password } = req.body;

    if (!name || !password) {
        return res.json({ mess: 'no username or password' });
    }

    try {
        const sql = `SELECT * FROM information WHERE username = ? AND password = ?`;
        const result = await query(sql, [name, password]);

        // 👉 ito boss, makikita mo yung result dito sa file na 'login.js'
        console.log(result); 

        if (result.length > 0) {
            res.status(200).json({ mess: 'data found', data: result });
        } else {
            res.status(404).json({ mess: 'invalid credentials' });
        }
    } catch (error) {
        // 👉 pati error makikita mo dito
        console.error(error);
        res.status(500).json({ mess: 'server error', error });
    }
});

module.exports = routes;
