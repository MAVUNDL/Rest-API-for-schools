const Pool = require('pg').Pool;
require("dotenv").config();

// establish connection
const pool = new Pool(
    {
        connectionString: process.env.connectionString,
        ssl: {
            rejectUnauthorized: false
        }
    }
);

pool.connect()
    .then(() => console.log('Connected to PostgreSQL database'))
    .catch(err => console.error('Connection error', err.stack));

module.exports = pool;