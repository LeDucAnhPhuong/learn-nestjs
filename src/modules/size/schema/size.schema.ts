import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { IsString } from 'class-validator';

@Schema({ _id: true })
export class Size {
  @Prop({ required: true })
  @IsString()
  name: string;

  @Prop({ required: true })
  @IsString()
  label: string;
}

export const sizeSchema = SchemaFactory.createForClass(Size);
