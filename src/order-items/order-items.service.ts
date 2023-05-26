import { Injectable } from '@nestjs/common';
import { CreateOrderItemDto } from './dto/create-order-item.dto';
import { UpdateOrderItemDto } from './dto/update-order-item.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { OrderItem } from './entities/order-item.entity';
import { Repository } from 'typeorm';

@Injectable()
export class OrderItemsService {
  constructor(
    @InjectRepository(OrderItem)
    private orderItemsRepository: Repository<OrderItem>,
  ) {}

  create(createOrderItemDto: CreateOrderItemDto) {
    return `This action returns all orderItems`;
  }

  findAll() {
    return this.orderItemsRepository.find({ relations: ['order', 'product'] });
  }

  findOne(id: number) {
    return `This action returns a #${id} orderItem`;
  }

  update(id: number, updateOrderItemDto: UpdateOrderItemDto) {
    return `This action updates a #${id} orderItem`;
  }

  remove(id: number) {
    return this.orderItemsRepository.delete(id);
  }
}
