# VALIDATION WITH CLASS VALIDATION

пример использования перехвата HTTP параметров с помощью PIPE   
и библиотеки class-validator  

- файл register/dto/signin.dto.ts
- файл app.controller.ts

# проверка

POST http://localhost:3000/signin   
вернет строку JSON   
{
    "email": "vasya@mail.ru",
    "password": "123",
    "name": "vasya",
    "remember": "true"
}   

или ошибку, например:   

{
    "message": [
        "password must be longer than or equal to 3 characters"
    ],
    "error": "Bad Request",
    "statusCode": 400
}



