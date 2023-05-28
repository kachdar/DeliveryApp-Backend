import { Product } from 'src/products/entities/product.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Shop {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 120, nullable: true })
  name: string;

  @Column({type: 'numeric', nullable: true})
  lat: number;

  @Column({type: 'numeric', nullable: true})
  lng: number;

  @OneToMany(() => Product, (product) => product.shop, { eager: true })
  products: Product[];
}
