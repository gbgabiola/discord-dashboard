import {
  createParamDecorator,
  ExecutionContext,
  Inject,
  UseGuards,
} from '@nestjs/common';
import { GqlExecutionContext, Query, Resolver } from '@nestjs/graphql';
import { AuthenticationProvider } from 'src/auth/services/auth/auth';
import { GraphQLAuthGuard } from 'src/auth/utils/Guards';
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
  ) {}

  @Query('getUser')
  async getUser(@CurrentUser() user: User): Promise<User> {
    console.log(user);
    return user;
  }
}
