import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { StoreService } from './store.service';
import { Store } from './store.entity';

@Controller('stores')
export class StoreController {
  constructor(private readonly storeService: StoreService) {}

  @Get()
  async findAll(): Promise<Store[]> {
    return this.storeService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Store> {
    return this.storeService.findOne(id);
  }

  @Post('create')
  async create(@Body() store: Store): Promise<Store> {
    return this.storeService.create(store);
  }
}