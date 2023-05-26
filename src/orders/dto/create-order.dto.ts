export class CreateOrderDto {
  totalPrice: number;

  username: string;

  email: string;

  phone: string;

  address: string;

  orderItemsIds: number[];
}
