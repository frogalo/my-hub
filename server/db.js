const mysql = require('mysql2/promise');
const {resolve} = require("path");
const envPath = resolve(__dirname, '..', '.env');
require('dotenv').config({ path: envPath });


const pool = mysql.createPool({
    host: process.env.DB_HOST || '',
    user: process.env.DB_USER || '',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_DATABASE || '',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

async function query(sql, values) {
    const [rows, fields] = await pool.execute(sql, values);
    return rows;
}

module.exports = {
    query
};
