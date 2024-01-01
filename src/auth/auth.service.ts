import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
    constructor(private readonly usersService : UsersService){}

    async validateUser(username:string, password:string): Promise<{id: number, name: string} | null>{
        const user = await this.usersService.findOne(username);

        if(user && user.password === password){
            const {password, username, ...rest} = user;

            return rest;
        }

        return null;
    }
}
