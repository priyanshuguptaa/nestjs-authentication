import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UsersService } from 'src/users/users.service';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './local.strategy';
import { LocalAuthGuard } from './local-auth.guard';
import { UsersModule } from 'src/users/users.module';

@Module({
  imports: [ PassportModule, AuthModule, UsersModule],
  providers: [AuthService, LocalStrategy]
})
export class AuthModule {}
