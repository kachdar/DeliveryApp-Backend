import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateShopDto } from './dto/create-shop.dto';
import { UpdateShopDto } from './dto/update-shop.dto';
import { Shop } from './entities/shop.entity';
import { Product } from 'src/products/entities/product.entity';

@Injectable()
export class ShopsService {
  constructor(
    @InjectRepository(Shop)
    private shopRepository: Repository<Shop>,
    @InjectRepository(Product)
    private productRepository: Repository<Product>,
  ) {}

  async create(createShopDto: CreateShopDto) {
    return await this.shopRepository.save(createShopDto);
  }

  async findAll() {
    return await this.shopRepository.find();
  }

  async findOne(id: number) {
    return await this.shopRepository.findOne({ where: { id } });
  }

  async findProductsByShopId(id: number) {
    return this.productRepository.find({
      relations: ['shop'],
      where: { shop: await this.findOne(id) },
    });
  }

  async update(id: number, updateShopDto: UpdateShopDto) {
    return await this.shopRepository.update(id, updateShopDto);
  }

  async remove(id: number) {
    return await this.shopRepository.delete(id);
  }
}
