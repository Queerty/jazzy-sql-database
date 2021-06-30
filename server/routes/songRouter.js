const pool = require('../modules/pool.js');
const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    //create variable to hold sql query
    let queryText = 'SELECT * FROM "song";';

    pool.query(queryText)
    .then(result => {
        res.send(result.rows);
    })
    .catch(error => {
        console.log('Error trying to get songs from Postgre:', error)
        res.sendStatus(500);
    });
});

module.exports = router;