import { Controller, Get, Post, Patch, Body, Param } from '@nestjs/common';
import { SupportTicketService } from './support-ticket.service';

@Controller('support-tickets')
export class SupportTicketController {
  constructor(private readonly supportTicketService: SupportTicketService) {}

  @Get()
  async findAll(): Promise<any> {
    return this.supportTicketService.findAll();
  }

  @Post('create')
  async create(@Body() body: any) {
    return this.supportTicketService.create(body);
  }

  @Patch('update/:id')
  async updateStatus(@Param('id') id: number, @Body() body: any) {
    return this.supportTicketService.updateStatus(id, body.status);
  }
}