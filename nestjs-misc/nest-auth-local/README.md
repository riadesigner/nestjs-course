# NESTJS и PASSPORT LOCAL STRATEGY

Разрешает доступ к определенному пути по паролю и логину   
Используется локальная страрегия, зарегистрированная в составе модуля auth   
( file: auth.module.ts )

# используется Декоратор @UseGuards

@UseGuards(AuthGuard('local'))   

# пример

POST http://localhost:3000   
- username: maria
- password: guess







