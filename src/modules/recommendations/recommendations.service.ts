import { Injectable } from '@nestjs/common';

@Injectable()
export class RecommendationsService {
  private products = [
    { id: 1, name: 'هاتف ذكي', category: 'الإلكترونيات' },
    { id: 2, name: 'لابتوب', category: 'الإلكترونيات' },
    { id: 3, name: 'ساعة ذكية', category: 'الإكسسوارات' },
    { id: 4, name: 'سماعات بلوتوث', category: 'الإكسسوارات' },
    { id: 5, name: 'حقيبة ظهر', category: 'الموضة' },
  ];

  async getRecommendedProducts(category: string): Promise<any> {
    return this.products.filter((product) => product.category === category);
  }

  async getPersonalizedRecommendations(userId: number): Promise<any> {
    return this.products.slice(0, 3);
  }
}