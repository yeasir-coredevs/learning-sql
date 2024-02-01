const mysql = require('mysql2/promise');

class DatabasePool {
  constructor({ host, user, password, database }) {
    this.host = host;
    this.user = user;
    this.password = password;
    this.database = database;
    this.pool = null;

  }

  async init() {
    try {
      this.pool = mysql.createPool({
        host: this.host,
        user: this.user,
        password: this.password,
        database: this.database,
        connectionLimit: 10,
      });
      console.log('=> Database initialized');
    } catch (err) {
      console.error('Error connecting to database:', err.message);
    }
  }

  async execute(query, values) {
    try {
      const [rows, fields] = await this.pool.execute(query, values);
      return rows;
    } catch (err) {
      console.error('Error executing query:', err.message);
      throw err;
    }
  }

  async release() {
    if (this.pool) {
      this.pool.end();
    }
  }
}

const databasePool = new DatabasePool({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'mydb',
});

module.exports = databasePool;
