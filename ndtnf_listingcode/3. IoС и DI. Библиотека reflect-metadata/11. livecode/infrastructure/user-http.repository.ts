import { injectable } from "inversify";
import { IUserRepository } from "../user/user.repository";
import { HttpClient } from "./http-client";

@injectable()
export class UserHttpRepository implements IUserRepository {
  constructor(private http: HttpClient) {}

  getUsers() {
    return this.http.get("/api/users");
  }
}
