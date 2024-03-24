# nestjs learning app

### Пример подключения модуля Book

```ts title="app.module.ts"

@Module({
  imports: [BookModule],
  controllers: [AppController],
  providers: [AppService],
})
...

```

### Пример реализации DI через декоратор и интерфейс класса

```ts title="book.module.ts"

@Module({
  controllers: [BookController],
  providers: [
    {
      provide: 'iBookService',
      useClass: BookService,
    },
    DB,
  ],
})
export class BookModule {}

```

```ts title="book.controller.ts"

@Controller('books')
export class BookController {
  constructor(
    @Inject('iBookService') private readonly bookService: iBookService,
  ) {}
   ...
}

```

