const queryBuilder = require('./queryBuilder');

class ProductQuery {
    constructor(connection) {
        this.query = queryBuilder(connection);
    }
    findAll() {
        return this.query('SELECT * FROM products');
    }
    removeById(id) {
        return this.query(`DELETE FROM products WHERE id = ${id}`)
    }
    create(name, price, sku) {
        return this.query(`
            INSERT INTO 
                products (name, price, sku) 
            VALUES ("${name}", ${price}, "${sku}")
        `);
    }
}
module.exports = ProductQuery;