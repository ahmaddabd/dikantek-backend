import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { DiscountService } from './discount.service';

@Controller('discounts')
export class DiscountController {
  constructor(private readonly discountService: DiscountService) {}

  @Get()
  async findAll(): Promise<any> {
    return this.discountService.findAll();
  }

  @Post('create')
  async create(@Body() body: any) {
    return this.discountService.create(body);
  }

  @Post('apply/:code')
  async applyDiscount(@Param('code') code: string) {
    return this.discountService.applyDiscount(code);
  }
}