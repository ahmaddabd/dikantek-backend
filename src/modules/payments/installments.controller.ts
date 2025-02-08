import { Controller, Get, Post, Query, Body } from '@nestjs/common';
import { InstallmentsService } from './installments.service';

@Controller('installments')
export class InstallmentsController {
  constructor(private readonly installmentsService: InstallmentsService) {}

  @Get('calculate')
  async calculateInstallments(
    @Query('amount') amount: number,
    @Query('months') months: number,
    @Query('interestRate') interestRate: number
  ) {
    return this.installmentsService.calculateInstallments(amount, months, interestRate);
  }

  @Post('subscribe')
  async subscribeUser(@Body() body: any) {
    return this.installmentsService.subscribeUser(body.userId, body.plan);
  }
}