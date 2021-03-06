const express = require('express');
const bodyParser = require('body-parser');
const artistRouter = require('./routes/artistRouter');
const songRouter= require('./routes/songRouter');
const pg= require('pg');
const pool = require('./modules/pool');
const Pool = pg.Pool;
const config = {
    database: 'jazzy-sql',
    host: 'localhost',
    port: 5432,
    max: 10,
    idleTimeoutMillis: 30000,
};

pool.on('connect', () => {
    console.log('Postgresql connected');
});

pool.on('error', (error) => {
    console.log('Error with postgres pool', error);
})


const app = express();
const PORT = 5000;

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('server/public'));

//Routes
app.use('/artist', artistRouter);
app.use('/song', songRouter);

app.listen(PORT, () => {
    console.log('listening on port', PORT)
});

// TODO - Replace static content with a database tables
// const artistList = [ 
//     {
//         name: 'Ella Fitzgerald',
//         birthdate: '04-25-1917'
//     },
//     {
//         name: 'Dave Brubeck',
//         birthdate: '12-06-1920'
//     },       
//     {
//         name: 'Miles Davis',
//         birthdate: '05-26-1926'
//     },
//     {
//         name: 'Esperanza Spalding',
//         birthdate: '10-18-1984'
//     },
// ]
// const songList = [
//     {
//         title: 'Take Five',
//         length: '5:24',
//         released: '1959-09-29'
//     },
//     {
//         title: 'So What',
//         length: '9:22',
//         released: '1959-08-17'
//     },
//     {
//         title: 'Black Gold',
//         length: '5:17',
//         released: '2012-02-01'
//     }
// ];

// app.get('/artist', (req, res) => {
//     console.log(`In /songs GET`);
//     res.send(artistList);
// });

// app.post('/artist', (req, res) => {
//     artistList.push(req.body);
//     res.sendStatus(201);
// });

// app.get('/song', (req, res) => {
//     console.log(`In /songs GET`);
//     res.send(songList);
// });

// app.post('/song', (req, res) => {
//     songList.push(req.body);
//     res.sendStatus(201);
// });


