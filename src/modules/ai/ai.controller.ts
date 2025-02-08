import { Controller, Get, Query, Param } from '@nestjs/common';
import { AIService } from './ai.service';

@Controller('ai')
export class AIController {
  constructor(private readonly aiService: AIService) {}

  @Get('predict-sales')
  async predictSalesTrend(@Query('category') category: string) {
    return this.aiService.predictSalesTrend(category);
  }

  @Get('recommend-pricing/:productId')
  async recommendPricing(@Param('productId') productId: number) {
    return this.aiService.recommendPricing(productId);
  }
}