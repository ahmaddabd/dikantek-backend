import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { SubscriptionService } from './subscription.service';

@Controller('subscriptions')
export class SubscriptionController {
  constructor(private readonly subscriptionService: SubscriptionService) {}

  @Get()
  async findAll(): Promise<any> {
    return this.subscriptionService.findAll();
  }

  @Post('subscribe')
  async subscribeUser(@Body() body: any) {
    return this.subscriptionService.subscribeUser(body.userId, body.planId);
  }

  @Post('cancel/:id')
  async cancelSubscription(@Param('id') id: number) {
    return this.subscriptionService.cancelSubscription(id);
  }
}