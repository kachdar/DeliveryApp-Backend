import { OrderItem } from 'src/order-items/entities/order-item.entity';
import { Column, CreateDateColumn, Entity, OneToMany, PrimaryColumn } from 'typeorm';

@Entity()
export class Order {
  @PrimaryColumn()
  id: number;

  @Column({ type: 'numeric' })
  totalPrice: number;

  @Column({ type: 'varchar', length: 120 })
  username: string;

  @Column({ type: 'varchar', length: 120 })
  email: string;

  @Column({ type: 'varchar', length: 120 })
  phone: string;

  @Column({ type: 'varchar', length: 120 })
  address: string;

  @CreateDateColumn({ type: 'timestamptz', default: 'now()' })
  createdAt: string;

  @CreateDateColumn({ type: 'timestamptz', default: 'now()' })
  updatedAt: string;
}
