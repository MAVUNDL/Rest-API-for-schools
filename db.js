const Pool = require('pg').Pool;
require("dotenv").config();

// establish connection
const pool = new Pool(
    // {
    //     user: process.env.user,
    //     host: process.env.host,
    //     database: process.env.database,
    //     password: process.env.password,
    //     port: process.env.port,
    // }
    {
        connectionString: process.env.connectionString,
        ssl: {
            rejectUnauthorized: false
        }
    }
);

console.log(process.env.connectionString);

module.exports = pool;