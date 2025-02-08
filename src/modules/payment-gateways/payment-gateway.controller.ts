import { Controller, Post, Body } from '@nestjs/common';
import { PaymentGatewayService } from './payment-gateway.service';

@Controller('payment-gateways')
export class PaymentGatewayController {
  constructor(private readonly paymentGatewayService: PaymentGatewayService) {}

  @Post('process')
  async processPayment(@Body() body: any) {
    return this.paymentGatewayService.processPayment(body.orderId, body.amount, body.gateway);
  }
}