const Pool = require("pg").Pool

const pool = new Pool({
    user: "postgres",
    password: "Cosmic@321",
    host: "localhost",
    port: 5432,
    database: "elearning"
});

module.exports = pool;