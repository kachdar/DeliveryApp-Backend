import { Type } from 'class-transformer';
import {
  IsNumber,
  IsOptional,
  IsString,
  Min,
  ValidateNested,
} from 'class-validator';
import { Shop } from 'src/shops/entities/shop.entity';

export class CreateProductDto {
  @IsString()
  name: string;

  @IsString()
  @IsOptional()
  imageUrl: string;

  @IsNumber()
  @Min(0)
  @IsOptional()
  price: number;

  @ValidateNested()
  @Type(() => Shop)
  shop: Shop;
}
