import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Return {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  orderId: number;

  @Column('text')
  reason: string;

  @Column({ default: 'pending' }) // pending, approved, rejected, completed
  status: string;

  @Column({ default: () => 'CURRENT_TIMESTAMP' })
  requestedAt: Date;
}