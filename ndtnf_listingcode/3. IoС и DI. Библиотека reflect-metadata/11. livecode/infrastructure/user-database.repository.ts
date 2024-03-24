import { injectable } from "inversify";
import { IUserRepository } from "../user/user.repository";
import { DbConnection } from "./db.connection";

@injectable()
export class UserDatabaseRepository implements IUserRepository {
  constructor(private connection: DbConnection) {}

  getUsers() {
    return this.connection.query("SELECT * FROM users");
  }
}
