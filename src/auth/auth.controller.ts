import { Body, Controller, HttpCode, Post } from '@nestjs/common';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { AuthService } from './auth.service';
import { AuthDto } from './dto';

@Controller('auth')
export class AuthController {
  constructor(private AuthService: AuthService) {}

  @Post('signup')
  signup(@Body() dto: AuthDto) {
    return this.AuthService.signup(dto);
  }
  @HttpCode(200)
  @Post('signin')
  singin(@Body() dto: AuthDto) {
    return this.AuthService.login(dto);
  }
}
