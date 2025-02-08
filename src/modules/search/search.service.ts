import { Injectable } from '@nestjs/common';

@Injectable()
export class SearchService {
  private products = [
    { id: 1, name: 'هاتف ذكي', category: 'الإلكترونيات', price: 300 },
    { id: 2, name: 'لابتوب', category: 'الإلكترونيات', price: 1000 },
    { id: 3, name: 'ساعة ذكية', category: 'الإكسسوارات', price: 200 },
  ];

  async searchProducts(query: string, category?: string, minPrice?: number, maxPrice?: number): Promise<any> {
    let results = this.products.filter((product) => product.name.includes(query));

    if (category) {
      results = results.filter((product) => product.category === category);
    }

    if (minPrice !== undefined) {
      results = results.filter((product) => product.price >= minPrice);
    }

    if (maxPrice !== undefined) {
      results = results.filter((product) => product.price <= maxPrice);
    }

    return results;
  }
}