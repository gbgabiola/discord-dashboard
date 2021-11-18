import { Module } from '@nestjs/common';
import { UsersController } from './controllers/users/users.controller';
import { PostsController } from './controllers/posts/posts.controller';

@Module({
  controllers: [UsersController, PostsController],
})
export class UsersModule {}
