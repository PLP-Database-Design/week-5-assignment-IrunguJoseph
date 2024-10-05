const express = require('express');
const app = express();
const mysql = require('mysql2');
const dotenv = require('dotenv');

// Configure environment
dotenv.config();

// Connecting to the database
const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});


// // Question 1: 
app.get('', (req, res) => {
    const getPatients = "SELECT patient_id, first_name, last_name, date_of_birth FROM patients"
    db.query(getPatients, (err, data) => {
        // If error occur
        if(err) {
            return res.status(400).send("Fail to get patients", err);
        }else {
            //Display the records to the browser 
            res.status(200).send(data);
        }    
    });
});

// Question 2:
app.get('', (req, res) => {
    const getPatients = "SELECT first_name, last_name, provider_specialty FROM providers"
    db.query(getPatients, (err, data) => {
        // If error occur
        if(err) {
            return res.status(400).send("Fail to get providers", err);
        }else {
            //Display the records to the browser 
            res.status(200).send(data);
        }    
    });
});


// Question 3:
app.get('', (req, res) => {
    const getPatients = "SELECT first_name FROM patients"
    db.query(getPatients, (err, data) => {
        // If error occur
        if(err) {
            return res.status(400).send("Fail to get patients", err);
        }else {
            //Display the records to the browser 
            res.status(200).send(data);
        }    
    });
});

// Question 4:
app.get('', (req, res) => {
    const getPatients = "SELECT provider_specialty FROM providers"
    db.query(getPatients, (err, data) => {
        // If error occur
        if(err) {
            return res.status(400).send("Fail to get providers", err);
        }else {
            //Display the records to the browser 
            res.status(200).send(data);
        }    
    });
});


// listen to the server
const PORT = 3000
app.listen(PORT, () => {
  console.log(`server is runnig on http://localhost:${PORT}`)
});
