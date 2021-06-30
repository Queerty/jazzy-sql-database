const pool = require('../modules/pool.js');
const express = require('express');

const router = express.Router();

//returns array of artists from the DB;

router.get('/', (req, res) => {
    //create variable to hold SQL query;
    let queryText = 'SELECT * FROM "artist";';
    //Make SQL query to DB
    pool.query(queryText)
    .then(result => {
        res.send(result.rows);
    })
    .catch(error => {console.log('Error trying to get artists from Postgre', error);
    res.sendStatus(500);
    });
});

module.exports = router;