import { IsNumber, IsString, Min } from 'class-validator';
import { OrderItem } from 'src/order-items/entities/order-item.entity';

export class CreateOrderDto {
  @IsNumber()
  @Min(0)
  totalPrice: number;

  @IsString()
  name: string;

  @IsString()
  email: string;

  @IsString()
  phone: string;

  @IsString()
  address: string;

  orderItems: OrderItem[];
}
