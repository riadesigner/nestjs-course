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
    protected _repository: IUserRepository;
    get repository(): IUserRepository {
        return this._repository;
    }
    set repository(repository: IUserRepository) {
        this._repository = repository;
    }
}
