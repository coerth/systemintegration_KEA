import sqlite3 from 'sqlite3';

// Connect to SQLite database
let db = new sqlite3.Database('./mydb.sqlite3', (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Connected to the mydb.sqlite3 database.');
});

// Seed data
db.serialize(() => {
  db.run(`INSERT INTO governments (name) VALUES ('Government 1'), ('Government 2')`);

  db.run(`INSERT INTO secrets (description, government_id) VALUES ('Secret 1', 1), ('Secret 2', 2)`);

  db.run(`INSERT INTO leakers (name, secret_id) VALUES ('Leaker 1', 1), ('Leaker 2', 2)`);

  db.run(`INSERT INTO spies (name, government_id) VALUES ('Spy 1', 1), ('Spy 2', 2)`);
});

// Close the database connection
db.close((err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Close the database connection.');
});