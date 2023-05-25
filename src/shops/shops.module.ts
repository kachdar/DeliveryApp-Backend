import { Module } from '@nestjs/common';
import { ShopsService } from './shops.service';
import { ShopsController } from './shops.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Shop } from './entities/shop.entity';
import { Product } from 'src/products/entities/product.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Shop, Product])],
  controllers: [ShopsController],
  providers: [ShopsService]
})
export class ShopsModule {}
