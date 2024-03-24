const dbConnection = require('./dbConnection');
const ProductQuery = require('./ProductQuery');
const Product = new ProductQuery(dbConnection);

const init = async () => {
    let data = await Product.findAll()
    console.log('basic', data.results);

    const inserted = await Product.create('Sample Product', 200, 'sam1');
    const { insertId } = inserted.results;

    console.log('insert data', inserted.results);

    data = await Product.findAll();
    console.log('after insert:', data.results);

    await Product.removeById(insertId);

    data = await Product.findAll();
    console.log('after remove', data.results);

    dbConnection.end();
};

init();