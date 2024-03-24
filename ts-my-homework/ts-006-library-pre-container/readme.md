
# Библиотека книг

-- JAVASCRIPT --   

ПРИМЕР РАБОТЫ С IOC И DI   

контейнер создается здесь:    
./app/infrastructure/   

используется здесь:    
./app/books/book-routes.js

### пакеты

- inversify
- reflect-metadata

### основа

- mongodb
- mongoos
- node

### работает по адресу

- http://localhost:8080
- http://localhost:8080/api/books

### запуск с помощью yml

docker compose up

```yml title="docker-compose.yml"

version: "3.0"

services:
  
  mongo:
    image: mongo
    restart: always
    environment:
      MONGO_INITDB_ROOT_USERNAME: root
      MONGO_INITDB_ROOT_PASSWORD: example

  mongo-express:
    image: mongo-express
    restart: always
    ports:
      - 8081:8081
    environment:
      ME_CONFIG_MONGODB_ADMINUSERNAME: root
      ME_CONFIG_MONGODB_ADMINPASSWORD: example
      ME_CONFIG_MONGODB_URL: mongodb://root:example@mongo:27017/

  library:
    image: riadesigner/lib-mongo:v-1.0.0
    restart: always
    working_dir: /app
    ports:
      - 8080:8080
    environment:
      - PORT=8080
      - MONGO_URL=mongodb://root:example@mongo:27017/
    command: npm run start
    depends_on:
      - mongo


```




