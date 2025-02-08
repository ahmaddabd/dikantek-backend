import { Injectable } from '@nestjs/common';

@Injectable()
export class PaymentsService {
  async processPayment(orderId: number, amount: number, method: string): Promise<any> {
    if (method === 'PayPal') {
      return { orderId, status: 'paid', method, transactionId: `PP-${Date.now()}` };
    } else if (method === 'Stripe') {
      return { orderId, status: 'paid', method, transactionId: `ST-${Date.now()}` };
    } else if (method === 'Syriatel Cash') {
      return { orderId, status: 'paid', method, transactionId: `SYR-${Date.now()}` };
    } else if (method === 'MTN Cash') {
      return { orderId, status: 'paid', method, transactionId: `MTN-${Date.now()}` };
    } else {
      return { error: 'Invalid payment method' };
    }
  }
}