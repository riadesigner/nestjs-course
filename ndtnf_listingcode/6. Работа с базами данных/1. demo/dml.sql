SELECT FROM products WHERE price > 20;

INSERT INTO products (name, price, sku) VALUES ('Гречка', 3000, 'akj-9');

UPDATE products SET price = price * 1.5;

DELETE FROM products WHERE id = 1;

SELECT FROM products WHERE height > 20 AND width < 50;



INSERT INTO products (name, price, sku) VALUES ('Гречка', 3000, 'akj-9');
INSERT INTO products (name, price, sku) VALUES ('Соль', 2000, 'akj-8');
INSERT INTO products (name, price, sku) VALUES ('Сахар', 5000, 'akj-7');
INSERT INTO products (name, price, sku) VALUES ('Перец', 7000, 'akj-1');

INSERT INTO products (name, price, sku) VALUES (
    ('Имбирь', 2500, 'ako-11'),
    ('Сметана', 12700, 'aio-11')
);

select id from products where sku = 'akj-1';
delete from products where id = 4;