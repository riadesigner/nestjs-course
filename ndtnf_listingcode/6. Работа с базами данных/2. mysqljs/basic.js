const dbConnection = require('./dbConnection');
const queryBuilder = require('./queryBuilder');
const query = queryBuilder(dbConnection);

const init = async () => {
    const data = await query('SELECT 1 + 1 AS solution');
    const { solution } = data.results[0];

    console.log({ solution });

    dbConnection.end();
};

init();