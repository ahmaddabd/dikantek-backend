import { Injectable } from '@nestjs/common';
import speakeasy from 'speakeasy';

@Injectable()
export class AuthService {
  private twoFactorSecret: string = '';

  async login(user: any) {
    return { message: 'Login successful', user };
  }

  async register(userData: any) {
    return { message: 'User registered successfully', userData };
  }

  generateTwoFactorSecret(): string {
    this.twoFactorSecret = speakeasy.generateSecret().base32;
    return this.twoFactorSecret;
  }

  verifyTwoFactorToken(token: string): boolean {
    return speakeasy.totp.verify({
      secret: this.twoFactorSecret,
      encoding: 'base32',
      token,
    });
  }
}