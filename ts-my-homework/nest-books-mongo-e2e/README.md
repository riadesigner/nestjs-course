# JEST & NESTJS & MONGOOSE

Пример реализации unit тестов и e2e тестов в NestJs;   
А также mocking обращения к репозиторию (mongoose)    


### Запуск unit тестов

```
$ npm run test
```

### Запуск e2e тестов

```
$ npm run test:e2e
```

### Файлы тестов здесь:

- [books.controller.spec.ts](app/src/books/test/books.controller.spec.ts)
- [books.service.e2e-spec.ts](app/src/books/test/books.service.e2e-spec.ts)

### Особенности реализации:

- реализован automocking (через папку mocks) – автоматическа замена одноименных сервисов
- использованы stubs (заглушки) для сущности Book

### Automocking здесь:

- [books.service.ts](app/src/books/__mocks__/books.service.ts)


