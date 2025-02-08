import { Controller, Get } from '@nestjs/common';
import { ReportsService } from './reports.service';

@Controller('reports')
export class ReportsController {
  constructor(private readonly reportsService: ReportsService) {}

  @Get('total-sales')
  async getTotalSales() {
    return { totalSales: await this.reportsService.getTotalSales() };
  }

  @Get('order-count')
  async getOrderCount() {
    return { orderCount: await this.reportsService.getOrderCount() };
  }

  @Get('pending-orders')
  async getPendingOrders() {
    return { pendingOrders: await this.reportsService.getPendingOrders() };
  }
}