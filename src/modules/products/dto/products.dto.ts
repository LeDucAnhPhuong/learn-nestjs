import { Prop } from '@nestjs/mongoose';
import { IsNumber, IsString } from 'class-validator';

export class ProductDto {
  @IsString()
  name: string;
  @IsNumber()
  price: number;
  @IsString()
  @Prop({ type: String, required: true })
  tagID: string;
  @Prop({ required: true })
  sizesID: string[];
}
