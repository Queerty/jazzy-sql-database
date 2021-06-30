const pg= require('pg');
const Pool = pg.Pool;
const config = {
    database: 'jazzy-sql',
    host: 'localhost',
    port: 5432,
    max: 10,
    idleTimeoutMillis: 30000,
};
//new pool instance to manage connections
const pool = new Pool(config);

//for debugging we check connections
pool.on('connect', (client) => {
    console.log('PostgreSQL connected');
});

//log errors
pool.on('error', (err, client) => {
    console.log('Unexpected error on idle client', err)
});

//access to pool in other code
module.exports = pool;

