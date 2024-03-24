console.clear();
import "reflect-metadata";
import { Container } from "inversify";
import { UserService } from "./user/user.service";
import { IUserRepository } from "./user/user.repository";

import { DbConnection } from "./infrastructure/db.connection";
import { HttpClient } from "./infrastructure/http-client";
import { UserDatabaseRepository } from "./infrastructure/user-database.repository";
import { UserHttpRepository } from "./infrastructure/user-http.repository";

const container = new Container();
container.bind(DbConnection).toSelf();
container.bind(HttpClient).toSelf();

container.bind(IUserRepository).to(UserDatabaseRepository);
// container.bind(IUserRepository).to(UserHttpRepository);

container.bind(UserService).toSelf();

const userService = container.get(UserService);
console.log(userService);
userService.fetchList();
