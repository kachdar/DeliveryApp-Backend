import { Injectable } from '@nestjs/common';
import { CreateShopDto } from './dto/create-shop.dto';
import { UpdateShopDto } from './dto/update-shop.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Shop } from './entities/shop.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ShopsService {
  constructor(
    @InjectRepository(Shop)
    private shopRepository: Repository<Shop>,
  ) {}

  create(createDestinationDto: CreateShopDto) {
    return this.shopRepository.save(createDestinationDto);
  }

  findAll() {
    return this.shopRepository.find();
  }

  findOne(id: number) {
    return this.shopRepository.findOneBy({id: id});
  }

  update(id: number, updateDestinationDto: UpdateShopDto) {
    return this.shopRepository.update(id, updateDestinationDto);
  }

  remove(id: number) {
    return this.shopRepository.delete(id);
  }
}
