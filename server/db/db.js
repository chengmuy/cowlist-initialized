const mysql = require("mysql");
const Promise = require("bluebird");

const { DB_USER, DB_PASSWORD } = require("./config.js");
const database = "cowlist";

const connection = mysql.createConnection({
  user: DB_USER,
  password: DB_PASSWORD
  // database: database
});

const db = Promise.promisifyAll(connection, { multiArgs: true });

db.connectAsync()
  .then(() => console.log(`Connected to ${database} database as ID ${db.threadId}`))
  .then(() => db.queryAsync(`CREATE DATABASE IF NOT EXISTS ${database}`))
  .then(() => db.queryAsync(`USE ${database}`))
  .then(() => createTables(db));

function createTables(db) {
  if (!db.queryAsync) {
    db = Promise.promisifyAll(db);
  }

  return db
    .queryAsync(
      `
    CREATE TABLE IF NOT EXISTS cows (
      id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      description VARCHAR(255)
    );`
    )
    .error(err => console.error(err));
}

module.exports = db;
