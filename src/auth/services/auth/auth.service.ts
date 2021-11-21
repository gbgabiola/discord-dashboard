import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/typeorm';
import { UserDetails } from 'src/utils/types';
import { Repository } from 'typeorm';
import { AuthenticationProvider } from './auth';

@Injectable()
export class AuthService implements AuthenticationProvider {
  constructor(@InjectRepository(User) private userRepo: Repository<User>) {}

  async validateUser(details: UserDetails) {
    const { discordId } = details;
    const user = await this.userRepo.findOne({ discordId });
    if (user) {
      await this.userRepo.update({ discordId }, details);
      return user;
    }
    return this.createUser(details);
  }
  createUser(details: UserDetails) {
    const user = this.userRepo.create(details);
    return this.userRepo.save(user);
  }
  findUser(discordId: string): Promise<User | undefined> {
    return this.userRepo.findOne({ discordId });
  }
}
