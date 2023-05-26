import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ShopsModule } from './shops/shops.module';
import { ProductsModule } from './products/products.module';
import { TypeOrmConfigService } from './shared/typeorm/typeorm.service';
import { OrderItemsModule } from './order-items/order-items.module';
import { OrdersModule } from './orders/orders.module';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({ useClass: TypeOrmConfigService }),
    ShopsModule,
    ProductsModule,
    OrderItemsModule,
    OrdersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
