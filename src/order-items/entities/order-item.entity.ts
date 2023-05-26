import { Order } from 'src/orders/entities/order.entity';
import { Product } from 'src/products/entities/product.entity';
import { Column, Entity, ManyToOne, PrimaryColumn } from 'typeorm';

@Entity()
export class OrderItem {
  @PrimaryColumn()
  id: number;

  @Column({ type: 'numeric' })
  quantity: number;

  @ManyToOne(() => Product, (product) => product.orderItems)
  product: Product;

  @ManyToOne(() => Order, (order) => order.orderItems)
  order: Order;
}
