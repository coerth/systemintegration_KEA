import sqlite3 from 'sqlite3';

let db = new sqlite3.Database('./mydb.sqlite', (err) => {
    if (err) {
      console.error(err.message);
    }
    console.log('Connected to the mydb.sqlite database.');
});

// Select all records from transactions table
db.all(`SELECT * FROM transactions`, (err, rows) => {
    if (err) {
        console.error(err.message);
    } else {
        console.log('Transactions:', rows);
    }
});

// Select all records from orders table
db.all(`SELECT * FROM orders`, (err, rows) => {
    if (err) {
        console.error(err.message);
    } else {
        console.log('Orders:', rows);
    }
});

process.on('exit', () => {
    db.close((err) => {
      if (err) {
        console.error(err.message);
      }
      console.log('Closed the database connection.');
    });
});