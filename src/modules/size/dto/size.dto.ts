import { Prop } from '@nestjs/mongoose';
import { IsString } from 'class-validator';

export class SizeDto {
  @IsString()
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  @IsString()
  label: number;
}
