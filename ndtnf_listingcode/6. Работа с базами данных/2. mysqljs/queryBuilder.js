const queryBuilder = dbConnection =>
    sql => new Promise((resolve, reject) => {
        dbConnection.query(sql, (error, results, fields) => {
            if (error) {
                return reject(error);
            }
            resolve({
                results,
                fields
            });
        });
    });

module.exports = queryBuilder;