import { Injectable } from '@nestjs/common';

@Injectable()
export class ReportsService {
  private orders = [
    { id: 1, total: 500, status: 'completed' },
    { id: 2, total: 150, status: 'pending' },
    { id: 3, total: 700, status: 'completed' },
  ];

  async getTotalSales(): Promise<number> {
    return this.orders
      .filter(order => order.status === 'completed')
      .reduce((sum, order) => sum + order.total, 0);
  }

  async getOrderCount(): Promise<number> {
    return this.orders.length;
  }

  async getPendingOrders(): Promise<number> {
    return this.orders.filter(order => order.status === 'pending').length;
  }
}