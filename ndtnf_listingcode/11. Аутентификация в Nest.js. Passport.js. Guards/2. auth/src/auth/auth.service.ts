import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {
    constructor(private usersService: UsersService, private jwtService: JwtService) {}

    // async validateUser(username: string, pass: string): Promise<any> {
    //     const user = await this.usersService.findOne(username);
    //     if (user && user.password === pass) {
    //         const { password, ...result } = user;
    //         return result;
    //     }
    //     return null;
    // }

    async validateUser(id: number): Promise<any> {
        const user = await this.usersService.findOne(id);
        if (user) {
            return user;
        }
        return null;
    }

    createToken(payload: any) {
        return this.jwtService.sign(payload);
    }
}