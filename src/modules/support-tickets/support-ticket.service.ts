import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SupportTicket } from './support-ticket.entity';

@Injectable()
export class SupportTicketService {
  constructor(
    @InjectRepository(SupportTicket)
    private supportTicketRepository: Repository<SupportTicket>,
  ) {}

  async findAll(): Promise<SupportTicket[]> {
    return this.supportTicketRepository.find();
  }

  async findOne(id: number): Promise<SupportTicket> {
    return this.supportTicketRepository.findOne({ where: { id } });
  }

  async create(ticket: SupportTicket): Promise<SupportTicket> {
    return this.supportTicketRepository.save(ticket);
  }

  async updateStatus(ticketId: number, status: string): Promise<any> {
    await this.supportTicketRepository.update(ticketId, { status });
    return { message: `Support ticket updated to ${status}` };
  }
}