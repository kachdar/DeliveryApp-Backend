import { Order } from 'src/orders/entities/order.entity';
import { Product } from 'src/products/entities/product.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class OrderItem {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'numeric' })
  quantity: number;

  @Column()
  productId: number;
  @ManyToOne(() => Product, (product) => product.orderItems)
  @JoinColumn({ name: 'productId' })
  product: Product;

  @Column()
  orderId: number;
  @ManyToOne(() => Order, (order) => order.orderItems, {
    eager: false,
    cascade: true,
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'orderId' })
  order: Order;
}
