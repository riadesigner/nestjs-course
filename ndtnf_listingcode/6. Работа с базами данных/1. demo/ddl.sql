CREATE TABLE persons (
    id int NOT NULL AUTO_INCREMENT,
    last_name varchar(255) NOT NULL,
    first_name varchar(255) NOT NULL,
    address varchar(255) NOT NULL,
    city varchar(255),
    primary key (id)
);

CREATE TABLE products (
    id int NOT NULL AUTO_INCREMENT,
    name varchar(255) NOT NULL,
    price double NOT NULL,
    primary key (id)
);

ALTER TABLE products
ADD sku varchar(255) NOT NULL;

CREATE TABLE logs (
    id int NOT NULL AUTO_INCREMENT,
    description longtext,
    primary key (id)
);

DROP TABLE logs;