import { Injectable } from '@nestjs/common';

@Injectable()
export class AIService {
  async predictSalesTrend(category: string): Promise<any> {
    return {
      category,
      predictedGrowth: `${Math.floor(Math.random() * 20)}%`,
      peakSeason: 'March - June',
    };
  }

  async recommendPricing(productId: number): Promise<any> {
    return {
      productId,
      recommendedPrice: Math.floor(Math.random() * 500) + 50,
      confidenceScore: (Math.random() * 100).toFixed(2) + '%',
    };
  }
}