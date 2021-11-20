import { Inject, Injectable } from '@nestjs/common';
import { PassportSerializer } from '@nestjs/passport';
import { User } from 'src/typeorm';
import { Done } from 'src/utils/types';
import { AuthenticationProvider } from '../services/auth/auth';

@Injectable()
export class SessionSerializer extends PassportSerializer {
  constructor(
    @Inject('AUTH_SERVICE')
    private readonly authService: AuthenticationProvider,
  ) {
    super();
  }

  serializeUser(user: User, done: Done) {
    done(null, user);
  }

  async deserializeUser(user: User, done: Done) {
    const userDB = await this.authService.findUser(user.discordId);
    console.log(userDB);
    return userDB ? done(null, userDB) : done(null, null);
  }
}
