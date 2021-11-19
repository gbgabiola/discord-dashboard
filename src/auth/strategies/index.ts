import { Profile, Strategy } from 'passport-discord';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';

@Injectable()
export class DiscordStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({});
  }

  async validate(accessToken: string, refreshToken: string, profile: Profile) {
    const { username, discriminator, id, avatar } = profile;
    console.log(username, discriminator, id, avatar);
  }
}
