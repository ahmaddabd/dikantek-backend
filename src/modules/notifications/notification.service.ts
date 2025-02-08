import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Notification } from './notification.entity';
import { Server } from 'socket.io';

@Injectable()
export class NotificationService {
  private server: Server;

  constructor(
    @InjectRepository(Notification)
    private notificationRepository: Repository<Notification>,
  ) {}

  setSocketServer(server: Server) {
    this.server = server;
  }

  async sendNotification(userId: number, message: string): Promise<Notification> {
    const notification = this.notificationRepository.create({ userId, message });
    await this.notificationRepository.save(notification);

    // إرسال الإشعار عبر WebSocket
    if (this.server) {
      this.server.to(`user_${userId}`).emit('notification', notification);
    }

    return notification;
  }

  async getUserNotifications(userId: number): Promise<Notification[]> {
    return this.notificationRepository.find({ where: { userId } });
  }
}