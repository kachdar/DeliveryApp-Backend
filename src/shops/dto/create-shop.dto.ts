import { IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateShopDto {
  @IsString()
  name: string;

  @IsNumber()
  @IsOptional()
  lat: number;

  @IsNumber()
  @IsOptional()
  lng: number;

  @IsString()
  @IsOptional()
  address: string;
}
