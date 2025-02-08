import { Request } from 'express';
import { Controller, Post, Body, Req, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from '@nestjs/passport';

interface AuthenticatedRequest extends Request {
  user?: any; // تحديد `user` كخاصية اختيارية
}

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  @UseGuards(AuthGuard('jwt'))  // تأكد من تفعيل الحماية
  async login(@Req() req: AuthenticatedRequest) {
    if (!req.user) {
      throw new Error('User not authenticated');  // تجنب الأخطاء غير المتوقعة
    }
    return this.authService.login(req.user);
  }

  @Post('register')
  async register(@Body() body: any) {
    return this.authService.register(body);
  }
}