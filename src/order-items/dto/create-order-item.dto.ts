import { Type } from 'class-transformer';
import { IsNumber, Min, ValidateNested } from 'class-validator';
import { Order } from 'src/orders/entities/order.entity';
import { Product } from 'src/products/entities/product.entity';

export class CreateOrderItemDto {
  @IsNumber()
  @Min(1)
  quantity: number;

  @ValidateNested()
  @Type(() => Product)
  product: Product;

  @ValidateNested()
  @Type(() => Order)
  order: Order;
}
