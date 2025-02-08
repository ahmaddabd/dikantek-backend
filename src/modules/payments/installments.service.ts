import { Injectable } from '@nestjs/common';

@Injectable()
export class InstallmentsService {
  async calculateInstallments(amount: number, months: number, interestRate: number): Promise<any> {
    const monthlyPayment = (amount + (amount * interestRate / 100)) / months;
    return {
      totalAmount: amount + (amount * interestRate / 100),
      monthlyPayment,
      months,
      interestRate,
    };
  }

  async subscribeUser(userId: number, plan: string): Promise<any> {
    return {
      userId,
      plan,
      status: 'active',
      nextPayment: '2025-03-01',
    };
  }
}