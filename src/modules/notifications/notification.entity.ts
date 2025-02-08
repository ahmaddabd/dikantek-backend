import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Notification {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  userId: number;

  @Column('text')
  message: string;

  @Column({ default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;
}