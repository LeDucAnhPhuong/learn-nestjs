import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({ _id: true })
export class Tag {
  @Prop({ required: true })
  name: string;
  @Prop({ required: true })
  label: string;
}
export const tagSchema = SchemaFactory.createForClass(Tag);
