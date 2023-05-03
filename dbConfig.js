const { createConnection } = require('mysql2');

const {
  MYSQL_USER, MYSQL_HOST, MYSQL_DATABASE, MYSQL_PASSWORD,
} = process.env;

const database = createConnection({
  host: MYSQL_HOST,
  user: MYSQL_USER,
  password: MYSQL_PASSWORD,
  database: MYSQL_DATABASE,
});

module.exports = database;
