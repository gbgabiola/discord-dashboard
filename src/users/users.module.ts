import { Module } from '@nestjs/common';
import { UsersController } from './controllers/users/users.controller';
import { PostsController } from './controllers/posts/posts.controller';
import { UserService } from './services/user/user.service';
import { PostService } from './services/post/post.service';

@Module({
  controllers: [UsersController, PostsController],
  providers: [UserService, PostService],
})
export class UsersModule {}
