const mysql = require("mysql2");

require("dotenv").config();

// create a MySQL pool
const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

// promisify for Node.js async/await.
const promisePool = pool.promise();

// export a method to query the database
async function query(sql, params) {
    const [results,] = await promisePool.query(sql, params);
    return results;
}

module.exports = {query};
