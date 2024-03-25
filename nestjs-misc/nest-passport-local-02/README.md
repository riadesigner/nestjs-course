# NESTJS WITH PASSPORT 

Пример готовой реализации __Passport Local__ и  __Passport Jwt Local__ стратегии.

### Использование

Путь для аутентификации: 

- (POST) http://localhost:3000/auth/login/

На вход требует __email__ и __password__ (maria@mail.ru, guess)   
Возвращает __jwt-token__  

Приватная территория:

- (GET) http://localhost:3000/profile

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



