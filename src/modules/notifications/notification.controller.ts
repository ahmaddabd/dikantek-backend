import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { NotificationService } from './notification.service';

@Controller('notifications')
export class NotificationController {
  constructor(private readonly notificationService: NotificationService) {}

  @Post('send')
  async sendNotification(@Body() body: any) {
    return this.notificationService.sendNotification(body.userId, body.message);
  }

  @Get(':userId')
  async getUserNotifications(@Param('userId') userId: number) {
    return this.notificationService.getUserNotifications(userId);
  }
}