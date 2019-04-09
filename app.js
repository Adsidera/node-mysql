const express = require('express');
const bodyParser = require('body-parser');
const db = require('./db/db.js');


const app = express();

// First you need to create a connection to the db


// For parsing responses and requests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

let port = 8080;

app.listen(port, () => {
    console.log('Server is running on ciaociao ' + port);
    db.con.connect((err) => {
        if(err){
            console.log('Error connecting to Db');
        return;
        }
        console.log('Connection to Mysql established');
    });
    db.con.end((err) => {
      console.log(err);
    });
})