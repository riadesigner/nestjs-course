# NESTJS WITH PASSPORT 

Пример готовой реализации __Passport Local__ и  __Passport Jwt Local__ стратегии.   

### Установка

docker compose up   

### Структура модулей

- auth
- users

### Особенности реализации

Пользователи сохранаяются в базу данных MongoDB

### Использование

__Путь для регистрации:__   

- (POST) http://localhost:8080/api/users/signup/

требуется на вход: email, password, firstName (optional)

__Путь для аутентификации:__   

- (POST) http://localhost:8080/api/users/signin/

На вход требует __email__ и __password__ (maria@mail.ru, guess)   
Возвращает __jwt-token__   
В payload внедряется объект: {id, email, firstName}   
Секрет для JWT берется из .env   

__Частная территория:__

- (GET) http://localhost:8080/api/users/profile

В запросе просит __bearer jwt-token__, полученный в предыдущем запросе.   
Токен работает 60 сек.   


### Файлы

__local.strategy.ts:__   

- проверяет пароль/логин
- сохраняет в request User объект
- пропускает дальше
- выпускает jwt-токен на основе request.User
- возвращает jwt-токет

__jwt.strategy.ts:__   

- проверяет jwt-токен на соответствие
- пропускает дальше


