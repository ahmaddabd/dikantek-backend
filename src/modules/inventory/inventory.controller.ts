import { Controller, Get, Patch, Query, Param, Body } from '@nestjs/common';
import { InventoryService } from './inventory.service';

@Controller('inventory')
export class InventoryController {
  constructor(private readonly inventoryService: InventoryService) {}

  @Get('stock/:productId')
  async getStockLevel(@Param('productId') productId: number) {
    return this.inventoryService.getStockLevel(productId);
  }

  @Patch('update-stock')
  async updateStock(@Body() body: any) {
    return this.inventoryService.updateStock(body.productId, body.quantity);
  }

  @Get('low-stock')
  async checkLowStock() {
    return this.inventoryService.checkLowStock();
  }
}