import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Invoice } from './invoice.entity';

@Injectable()
export class BillingService {
  constructor(
    @InjectRepository(Invoice)
    private invoiceRepository: Repository<Invoice>,
  ) {}

  async generateInvoice(orderId: number, amount: number, userId: number): Promise<Invoice> {
    const invoice = this.invoiceRepository.create({ orderId, amount, userId, status: 'pending' });
    return this.invoiceRepository.save(invoice);
  }

  async getInvoicesByUser(userId: number): Promise<Invoice[]> {
    return this.invoiceRepository.find({ where: { userId } });
  }

  async payInvoice(invoiceId: number): Promise<any> {
    await this.invoiceRepository.update(invoiceId, { status: 'paid' });
    return { message: 'Invoice marked as paid' };
  }
}