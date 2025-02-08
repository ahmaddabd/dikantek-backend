import { Module } from '@nestjs/common';
import { SupportTicketService } from './support-ticket.service';
import { SupportTicketController } from './support-ticket.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SupportTicket } from './support-ticket.entity';

@Module({
  imports: [TypeOrmModule.forFeature([SupportTicket])],
  providers: [SupportTicketService],
  controllers: [SupportTicketController],
})
export class SupportTicketModule {}