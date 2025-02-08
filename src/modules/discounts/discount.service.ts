import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Discount } from './discount.entity';

@Injectable()
export class DiscountService {
  constructor(
    @InjectRepository(Discount)
    private discountRepository: Repository<Discount>,
  ) {}

  async findAll(): Promise<Discount[]> {
    return this.discountRepository.find();
  }

  async findOne(id: number): Promise<Discount> {
    return this.discountRepository.findOne({ where: { id } });
  }

  async create(discount: Discount): Promise<Discount> {
    return this.discountRepository.save(discount);
  }

  async applyDiscount(code: string): Promise<any> {
    const discount = await this.discountRepository.findOne({ where: { code } });
    if (!discount) {
      return { message: 'Invalid discount code' };
    }
    return discount;
  }
}