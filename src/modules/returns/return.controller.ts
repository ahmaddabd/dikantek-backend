import { Controller, Get, Post, Patch, Body, Param } from '@nestjs/common';
import { ReturnService } from './return.service';

@Controller('returns')
export class ReturnController {
  constructor(private readonly returnService: ReturnService) {}

  @Get()
  async findAll(): Promise<any> {
    return this.returnService.findAll();
  }

  @Post('request')
  async requestReturn(@Body() body: any) {
    return this.returnService.requestReturn(body.orderId, body.reason);
  }

  @Patch('update/:id')
  async updateReturnStatus(@Param('id') id: number, @Body() body: any) {
    return this.returnService.updateReturnStatus(id, body.status);
  }
}