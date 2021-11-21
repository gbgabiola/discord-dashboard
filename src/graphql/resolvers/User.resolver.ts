import {
  createParamDecorator,
  ExecutionContext,
  Inject,
  UseGuards,
} from '@nestjs/common';
import {
  GqlExecutionContext,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { AuthenticationProvider } from 'src/auth/services/auth/auth';
import { GraphQLAuthGuard } from 'src/auth/utils/Guards';
import { DiscordProvider } from 'src/discord/discord';
import { User } from 'src/typeorm';

export const CurrentUser = createParamDecorator(
  (data: unknown, ctx: ExecutionContext) =>
    GqlExecutionContext.create(ctx).getContext().req.user,
);

@Resolver('User')
@UseGuards(GraphQLAuthGuard)
export class UserResolver {
  constructor(
    @Inject('AUTH_SERVICE')
    private readonly authService: AuthenticationProvider,
    @Inject('DISCORD_SERVICE')
    private readonly discordService: DiscordProvider,
  ) {}

  @Query('getUser')
  async getUser(@CurrentUser() user: User): Promise<User> {
    console.log(user);
    return user;
  }

  @ResolveField()
  async guilds(@Parent() user: User) {
    return this.discordService.fetchGuilds(user.accessToken);
  }
}
