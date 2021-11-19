import { Controller, Get, Res } from '@nestjs/common';
import { Response } from 'express';

@Controller('auth')
export class AuthController {
  /**
   * GET /api/auth/login
   * Route the user will visit to authenticate
   */
  @Get('login')
  login() {
    return;
  }

  /**
   * GET /api/auth/redirect
   * Redirect URL the OAuth2 provider will call
   */
  @Get('redirect')
  redirect(@Res() res: Response) {
    res.send(200);
  }

  /**
   * GET /api/auth/status
   * Retrieve the auth status
   */
  @Get('status')
  status() {}

  /**
   * GET /api/auth/logout
   * Log the user out to destroy the session
   */
  @Get('logout')
  logout() {}
}
