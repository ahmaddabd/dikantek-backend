import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Return } from './return.entity';

@Injectable()
export class ReturnService {
  constructor(
    @InjectRepository(Return)
    private returnRepository: Repository<Return>,
  ) {}

  async findAll(): Promise<Return[]> {
    return this.returnRepository.find();
  }

  async findOne(id: number): Promise<Return> {
    return this.returnRepository.findOne({ where: { id } });
  }

  async requestReturn(orderId: number, reason: string): Promise<Return> {
    const returnRequest = this.returnRepository.create({ orderId, reason, status: 'pending' });
    return this.returnRepository.save(returnRequest);
  }

  async updateReturnStatus(returnId: number, status: string): Promise<any> {
    await this.returnRepository.update(returnId, { status });
    return { message: `Return request ${status}` };
  }
}