import { OrderItem } from 'src/order-items/entities/order-item.entity';

export class CreateOrderDto {
  totalPrice: number;

  username: string;

  email: string;

  phone: string;

  address: string;

  orderItems: OrderItem[];
}
