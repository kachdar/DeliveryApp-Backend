import { Product } from 'src/products/entities/product.entity';
import { Column, ManyToOne, PrimaryColumn } from 'typeorm';

export class OrderItem {
  @PrimaryColumn()
  id: number;

  @Column({ type: 'numeric' })
  quantity: number;

  @ManyToOne(() => Product, (product) => product.orderItems)
  product: Product;
}
