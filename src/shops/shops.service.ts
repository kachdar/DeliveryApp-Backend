import { Injectable } from '@nestjs/common';
import { CreateShopDto } from './dto/create-shop.dto';
import { UpdateShopDto } from './dto/update-shop.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Shop } from './entities/shop.entity';
import { Repository } from 'typeorm';
import { Product } from 'src/products/entities/product.entity';

@Injectable()
export class ShopsService {
  constructor(
    @InjectRepository(Shop)
    private shopRepository: Repository<Shop>,
    @InjectRepository(Product)
    private productRepository: Repository<Product>
  ) {}

  create(createDestinationDto: CreateShopDto) {
    return this.shopRepository.save(createDestinationDto);
  }

  findAll() {
    return this.shopRepository.find();
  }

  async findOne(id: number) {
    return await this.shopRepository.findOne({where: {id}});
  }

  async findProductsByShopId(id: number) {
    return this.productRepository.find({
      relations: ["shop"], 
      where: {shop: await this.findOne(id)}
    });
  }

  update(id: number, updateDestinationDto: UpdateShopDto) {
    return this.shopRepository.update(id, updateDestinationDto);
  }

  remove(id: number) {
    return this.shopRepository.delete(id);
  }
}
