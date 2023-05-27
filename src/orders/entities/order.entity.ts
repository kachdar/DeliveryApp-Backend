import { OrderItem } from 'src/order-items/entities/order-item.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Order {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: 'numeric' })
  totalPrice: number;

  @Column({ type: 'varchar', length: 120 })
  name: string;

  @Column({ type: 'varchar', length: 120 })
  email: string;

  @Column({ type: 'varchar', length: 120 })
  phone: string;

  @Column({ type: 'varchar', length: 120 })
  address: string;

  @OneToMany(() => OrderItem, (orderItem) => orderItem.order, { eager: true })
  orderItems: OrderItem[];

  @CreateDateColumn({ type: 'timestamptz', default: 'now()' })
  createdAt: string;

  @CreateDateColumn({ type: 'timestamptz', default: 'now()' })
  updatedAt: string;
}
