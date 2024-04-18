import sqlite3 from 'sqlite3';

// Connect to SQLite database
let db = new sqlite3.Database('./mydb.sqlite3', (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Connected to the mydb.sqlite3 database.');
});

// Create tables
db.serialize(() => {
  db.run(`
    CREATE TABLE governments (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL
    )
  `);

  db.run(`
    CREATE TABLE secrets (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      description TEXT NOT NULL,
      government_id INTEGER,
      FOREIGN KEY(government_id) REFERENCES governments(id)
    )
  `);

  db.run(`
    CREATE TABLE leakers (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      secret_id INTEGER,
      FOREIGN KEY(secret_id) REFERENCES secrets(id)
    )
  `);

  db.run(`
    CREATE TABLE spies (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      government_id INTEGER,
      FOREIGN KEY(government_id) REFERENCES governments(id)
    )
  `);
});

// Close the database connection
db.close((err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Close the database connection.');
});