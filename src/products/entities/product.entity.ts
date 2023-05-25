import { Shop } from 'src/shops/entities/shop.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 120 })
  name: string;

  @Column({ type: 'varchar', length: 120 })
  imageUrl: string;

  @Column({ type: 'numeric' })
  price: number;

  @ManyToOne(() => Shop, (shop) => shop.products, {
    eager: false,
    cascade: true,
    onDelete: 'CASCADE',
  })
  shop: Shop;
}
