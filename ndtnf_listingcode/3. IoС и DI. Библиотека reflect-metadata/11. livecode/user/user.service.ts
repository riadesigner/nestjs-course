import { injectable } from "inversify";
import { IUserRepository } from "./user.repository";

@injectable()
export class UserService {
  constructor(private readonly repo: IUserRepository) {}

  fetchList() {
    return this.repo.getUsers();
  }
}
