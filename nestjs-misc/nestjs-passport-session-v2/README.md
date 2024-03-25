
# SESSIONS WITH NESTJS, PASSPORT

Готовая реализация афтентификации/авторизации пользователей    
Поддержка ролей: клиент / админ   

- curl http://localhost:3001/auth/login -d 'email=masha@mail.ru&password=1234' -c cookie.masha.txt (зайти под админом)
- curl http://localhost:3001/auth/login -d 'email=vasya@mail.ru&password=1234' -c cookie.vasya.txt (зайти под пользователем)
- curl http://localhost:3001/admin  -b cookie.masha.txt (страница только для админов)
- curl http://localhost:3001/protected  -b cookie.vaysa.txt (страница только для зарегистрированных)
- curl http://localhost:3001/auth/register -c cookie.new.txt -d 'email=new@mail.ru&password=1234&confirmationPassword=1234&name=New'


Based on [article](https://dev.to/nestjs/setting-up-sessions-with-nestjs-passport-and-redis-210)   
