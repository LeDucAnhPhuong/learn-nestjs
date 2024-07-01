import { Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({
  timestamps: true,
})
export class Product {
  _id: string;
  name: string;
  price: number;
  constructor(_id: string, name: string, price: number) {
    this._id = _id;
    this.name = name;
    this.price = price;
  }
}
export const productSchema = SchemaFactory.createForClass(Product);
