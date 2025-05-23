const mariadb = require('mariadb');

const HOST = process.env.HOST || null
const DB_USER = process.env.DB_USER || null
const DB_PASSWORD = process.env.DB_PASSWORD || null
const DATABASE = process.env.DATABASE || null

const pool = mariadb.createPool({
  host: HOST,
  user: DB_USER,
  password: DB_PASSWORD,
  database: DATABASE,
});

module.exports = pool