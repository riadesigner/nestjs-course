# NESTJS WITH PASSPORT 

Пример реализации __Passport Local__ и  __Passport Jwt Local__ стратегии.   

### Структура модулей

- auth
- users

### Особенности реализации

Модули ссылаются друг на друга, поэтому использован   
обходной путь: __forwardRef()__

Пользователи вшиты в сервис (без базы данных):   
- {email: john@mail.ru, password: pass, firsName: john}
- {email: maria@mail.ru, password: guess, firsName: maria}

### Использование

__Путь для аутентификации:__   

- (POST) http://localhost:3000/api/users/signin/

На вход требует __email__ и __password__ (maria@mail.ru, guess)   
Возвращает __jwt-token__   
В payload внедряется объект: {id, email, firstName}   
Секрет для JWT берется из .env   

__Частная территория:__

- (GET) http://localhost:3000/api/users/profile

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



