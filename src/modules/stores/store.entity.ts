import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Store {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ unique: true })
  domain: string;

  @Column()
  ownerId: number;

  @Column({ default: true })
  isActive: boolean;
}