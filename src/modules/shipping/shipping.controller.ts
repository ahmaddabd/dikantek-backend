import { Controller, Get, Post, Query, Body } from '@nestjs/common';
import { ShippingService } from './shipping.service';

@Controller('shipping')
export class ShippingController {
  constructor(private readonly shippingService: ShippingService) {}

  @Get('calculate-cost')
  async calculateShippingCost(
    @Query('destination') destination: string,
    @Query('weight') weight: number
  ) {
    return this.shippingService.calculateShippingCost(destination, weight);
  }

  @Get('track')
  async trackShipment(@Query('trackingNumber') trackingNumber: string) {
    return this.shippingService.trackShipment(trackingNumber);
  }

  @Post('create')
  async createShipment(@Body() body: any) {
    return this.shippingService.createShipment(body.orderId, body.destination, body.weight);
  }
}