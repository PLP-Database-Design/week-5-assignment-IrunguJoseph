const express = require('express');
const app = express();
const mysql = require('mysql2');
const dotenv = require('dotenv');

// Configure environment
dotenv.config();

// Creating connection
const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});


// Retrieve all patients
app.get('', (req, res) => {
    const getPatients = "SELECT * FROM patients"
    db.query(getPatients, (err, data) => {
        // If error occur
        if(err) {
            return res.status(400).send("Fail to get patients", err);
        }

        res.status(200).send(data);
    });
});

// Send to browser
app.get('', (req, res) => {
    res.send("Hello World! Wish you a beautifull week.")
});
// Question 1 goes here


// Question 2 goes here


// Question 3 goes here


// Question 4 goes here



// listen to the server
const PORT = 3000
app.listen(PORT, () => {
  console.log(`server is runnig on http://localhost:${PORT}`)
});