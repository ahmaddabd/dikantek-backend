import { Controller, Get, Query, Param } from '@nestjs/common';
import { RecommendationsService } from './recommendations.service';

@Controller('recommendations')
export class RecommendationsController {
  constructor(private readonly recommendationsService: RecommendationsService) {}

  @Get('by-category')
  async getRecommendedProducts(@Query('category') category: string) {
    return this.recommendationsService.getRecommendedProducts(category);
  }

  @Get('personalized/:userId')
  async getPersonalizedRecommendations(@Param('userId') userId: number) {
    return this.recommendationsService.getPersonalizedRecommendations(userId);
  }
}