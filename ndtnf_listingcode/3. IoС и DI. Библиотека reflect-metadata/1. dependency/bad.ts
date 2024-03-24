class User {
    findAll() {
        // ...
    }
}

export class UserService {
    repository: User;
    constructor(repository: User) {
        this.repository = repository;
    }

    getAllUsers() {
        return this.repository.findAll();
    }
}
