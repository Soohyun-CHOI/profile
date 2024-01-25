const mysql = require("mysql2");

// create a MySQL pool
const pool = mysql.createPool({
    host: "127.0.0.1",
    user: "root",
    password: "Choisoohyun00?",
    database: "profile",
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
