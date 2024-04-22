import sqlite3

# Connect to the SQLite database
conn = sqlite3.connect('starwars.db')

# Create a cursor object
cur = conn.cursor()

# Execute a SELECT query
cur.execute("SELECT * FROM Spaceships")

# Fetch all rows from the result of the query
rows = cur.fetchall()

# Print all rows
for row in rows:
    print(row)

# Close the connection
conn.close()