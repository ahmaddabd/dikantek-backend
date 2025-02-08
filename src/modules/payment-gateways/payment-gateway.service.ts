import { Injectable } from '@nestjs/common';

@Injectable()
export class PaymentGatewayService {
  async processPayment(orderId: number, amount: number, gateway: string): Promise<any> {
    // محاكاة الدفع عبر بوابات مختلفة
    if (gateway === 'PayPal') {
      return { orderId, status: 'paid', gateway, transactionId: `PP-${Date.now()}` };
    } else if (gateway === 'Stripe') {
      return { orderId, status: 'paid', gateway, transactionId: `ST-${Date.now()}` };
    } else if (gateway === 'MTN Cash') {
      return { orderId, status: 'paid', gateway, transactionId: `MTN-${Date.now()}` };
    } else {
      return { error: 'Invalid payment gateway' };
    }
  }
}