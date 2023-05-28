import { Module } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { OrdersController } from './orders.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Order } from './entities/order.entity';
import { OrderItem } from 'src/order-items/entities/order-item.entity';
import { GoogleRecaptchaModule } from '@nestlab/google-recaptcha';

@Module({
  imports: [
    TypeOrmModule.forFeature([Order, OrderItem]),
    GoogleRecaptchaModule.forRoot({
      secretKey: '6Leo80YmAAAAAGE6BkzWhFTLdgvH9rDyLwMJ40tc',
      response: (req) => req.headers.recaptcha,
      // skipIf: process.env.NODE_ENV !== 'production',
    }),
  ],
  controllers: [OrdersController],
  providers: [OrdersService],
})
export class OrdersModule {}
