import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Subscription } from './subscription.entity';

@Injectable()
export class SubscriptionService {
  constructor(
    @InjectRepository(Subscription)
    private subscriptionRepository: Repository<Subscription>,
  ) {}

  async findAll(): Promise<Subscription[]> {
    return this.subscriptionRepository.find();
  }

  async findOne(id: number): Promise<Subscription> {
    return this.subscriptionRepository.findOne({ where: { id } });
  }

  async create(subscription: Subscription): Promise<Subscription> {
    return this.subscriptionRepository.save(subscription);
  }

  async subscribeUser(userId: number, planId: number): Promise<Subscription> {
    const subscription = this.subscriptionRepository.create({ userId, planId, status: 'active' });
    return this.subscriptionRepository.save(subscription);
  }

  async cancelSubscription(subscriptionId: number): Promise<any> {
    await this.subscriptionRepository.update(subscriptionId, { status: 'cancelled' });
    return { message: 'Subscription cancelled' };
  }
}