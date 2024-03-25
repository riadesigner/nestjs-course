export abstract class iCreateUserDto {
  email: string;
  password: string;
}

export abstract class iUpdateUserDto {
  email?: string;
  password?: string;
}

export abstract class iUser {
  id: string;
  email: string;
  password: string;
}

export abstract class iUserService {
  abstract getAllUsers(): Promise<iUser[] | null>;
  abstract addUser(dto: iCreateUserDto): Promise<iUser | null>;
  abstract getById(id: string): Promise<iUser | null>;
  abstract updateById(id: string, dto: iUpdateUserDto): Promise<iUser | null>;
}
