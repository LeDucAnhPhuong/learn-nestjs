import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { Size } from 'src/modules/size/schema/size.schema';
import { Tag } from 'src/modules/tags/schemas/tag.schema';

@Schema({ timestamps: true, _id: true })
export class Product {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  price: number;

  @Prop({ type: mongoose.Schema.Types.Mixed, required: true })
  tag: Tag | string;
  @Prop({ required: true })
  sizes: Size[];
}
export const productSchema = SchemaFactory.createForClass(Product);
