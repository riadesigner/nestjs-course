class UserRepository implements IUserRepository {
    findAll(): Promise<User[]> {
        return new Promise<User[]>(resolve => {
            resolve([new User]);
        });
    }
}

class User {

}

interface IUserRepository {
    findAll(): Promise<User[]>
}

export class UserService {
    repository: IUserRepository;
    constructor(repository: IUserRepository) {
        this.repository = repository;
    }

    getAllUsers() {
        return this.repository.findAll();
    }
}
