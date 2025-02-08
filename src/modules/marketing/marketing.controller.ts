import { Controller, Get, Query, Param } from '@nestjs/common';
import { MarketingService } from './marketing.service';

@Controller('marketing')
export class MarketingController {
  constructor(private readonly marketingService: MarketingService) {}

  @Get('track-ad')
  async trackAdPerformance(@Query('campaignId') campaignId: number) {
    return this.marketingService.trackAdPerformance(campaignId);
  }

  @Get('customer-behavior/:userId')
  async analyzeCustomerBehavior(@Param('userId') userId: number) {
    return this.marketingService.analyzeCustomerBehavior(userId);
  }
}