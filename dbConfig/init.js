const { Pool } = require("pg/lib");

const pool = new Pool();

module.exports = pool;
