require('dotenv').config()
const DB_NAME = process.env.DB_NAME || 'upreads_dev';

const options = {
    query: (e) => {
        console.log(e.query);
    }
};

const pgp = require('pg-promise')(options);

function setDatabase() {
    if(process.env.NODE_EN === 'development' || !process.env.NODE_ENV) {
        return pgp({
            database: DB_NAME,
            port: 5432,
            host: 'localhost',
        })
    }
    else {
        return pgp(process.env.DATABASE_URL)
    }
}

module.exports = setDatabase();