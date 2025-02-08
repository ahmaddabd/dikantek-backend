import { Controller, Get } from '@nestjs/common';
import { ReportService } from './report.service';

@Controller('reports')
export class ReportController {
  constructor(private readonly reportService: ReportService) {}

  @Get('sales')
  async getSalesReport() {
    return this.reportService.getSalesReport();
  }

  @Get('top-products')
  async getTopProducts() {
    return this.reportService.getTopProducts();
  }

  @Get('customers')
  async getCustomerStats() {
    return this.reportService.getCustomerStats();
  }
}