import { Injectable } from '@nestjs/common';

@Injectable()
export class InventoryService {
  private inventory = [
    { productId: 1, stock: 100, threshold: 10 },
    { productId: 2, stock: 50, threshold: 5 },
    { productId: 3, stock: 20, threshold: 2 },
  ];

  async getStockLevel(productId: number): Promise<any> {
    const product = this.inventory.find((p) => p.productId === productId);
    return product ? { productId, stock: product.stock, threshold: product.threshold } : { error: 'Product not found' };
  }

  async updateStock(productId: number, quantity: number): Promise<any> {
    const product = this.inventory.find((p) => p.productId === productId);
    if (product) {
      product.stock += quantity;
      return { productId, newStock: product.stock };
    }
    return { error: 'Product not found' };
  }

  async checkLowStock(): Promise<any> {
    return this.inventory.filter((p) => p.stock <= p.threshold);
  }
}