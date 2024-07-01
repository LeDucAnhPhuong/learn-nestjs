import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { productSchema, Product } from './schema/product.schema';
import { ProductController } from './product.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Tag, tagSchema } from '../tags/schemas/tag.schema';
import { Size, sizeSchema } from '../size/schema/size.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Product.name, schema: productSchema }]),
    MongooseModule.forFeature([{ name: Tag.name, schema: tagSchema }]),
    MongooseModule.forFeature([{ name: Size.name, schema: sizeSchema }]),
  ],
  providers: [ProductService],
  controllers: [ProductController],
})
export class ProductModules {}
