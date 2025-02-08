import { Controller, Get, Post, Patch, Body, Param } from '@nestjs/common';
import { BillingService } from './billing.service';

@Controller('billing')
export class BillingController {
  constructor(private readonly billingService: BillingService) {}

  @Post('generate')
  async generateInvoice(@Body() body: any) {
    return this.billingService.generateInvoice(body.orderId, body.amount, body.userId);
  }

  @Get(':userId')
  async getInvoicesByUser(@Param('userId') userId: number) {
    return this.billingService.getInvoicesByUser(userId);
  }

  @Patch('pay/:invoiceId')
  async payInvoice(@Param('invoiceId') invoiceId: number) {
    return this.billingService.payInvoice(invoiceId);
  }
}