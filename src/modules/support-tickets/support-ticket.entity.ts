import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class SupportTicket {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  userId: number;

  @Column('text')
  issue: string;

  @Column({ default: 'open' }) // open, in-progress, resolved, closed
  status: string;

  @Column({ default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;
}