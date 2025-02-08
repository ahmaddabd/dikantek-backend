import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Order } from '../orders/order.entity';
import { Product } from '../products/product.entity';
import { Customer } from '../customers/customer.entity';

@Injectable()
export class ReportService {
  constructor(
    @InjectRepository(Order) private orderRepository: Repository<Order>,
    @InjectRepository(Product) private productRepository: Repository<Product>,
    @InjectRepository(Customer) private customerRepository: Repository<Customer>,
  ) {}

  async getSalesReport(): Promise<any> {
    const totalOrders = await this.orderRepository.count();
    const totalRevenue = await this.orderRepository
      .createQueryBuilder('order')
      .select('SUM(order.totalPrice)', 'totalRevenue')
      .getRawOne();

    return {
      totalOrders,
      totalRevenue: totalRevenue.totalRevenue || 0,
    };
  }

  async getTopProducts(): Promise<any> {
    return this.productRepository
      .createQueryBuilder('product')
      .leftJoin('order', 'order', 'order.productId = product.id')
      .select('product.name, COUNT(order.id) as orderCount')
      .groupBy('product.name')
      .orderBy('orderCount', 'DESC')
      .limit(5)
      .getRawMany();
  }

  async getCustomerStats(): Promise<any> {
    const totalCustomers = await this.customerRepository.count();

    return {
      totalCustomers,
    };
  }
}