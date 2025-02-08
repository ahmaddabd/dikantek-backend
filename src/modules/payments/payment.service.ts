import { Injectable } from '@nestjs/common';

@Injectable()
export class PaymentService {
  async processPayment(orderId: number, paymentMethod: string): Promise<any> {
    // محاكاة عملية الدفع
    return {
      orderId,
      status: 'paid',
      method: paymentMethod,
      transactionId: `TXN-${Date.now()}`,
    };
  }
}