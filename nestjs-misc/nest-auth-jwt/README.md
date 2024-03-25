# NEST и JWT Strategy

Пример подключения JWT стратегии к NestJs приложению.

### получить новый token:

```
curl http://localhost:3000/token
```

### зайти на страницу, используя полученный токен:

```
curl -X POST http://localhost:3000/login -H "Authorization:Bearer eyJhbGciOiJIUzI1NiIsInR5cCI....."
```   

### Дополнительная информация по JWT аутентификации 

оф. документация: [здесь](https://docs.nestjs.com/security/authentication)   




