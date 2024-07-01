import { Injectable } from '@nestjs/common';
import { ProductDto } from './dto/products.dto';
import { Product } from './schema/product.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Tag } from '../tags/schemas/tag.schema';
import { Size } from '../size/schema/size.schema';

@Injectable()
export class ProductService {
  constructor(
    @InjectModel(Product.name)
    private readonly productModel: Model<Product>,
    @InjectModel(Tag.name)
    private readonly tagModel: Model<Tag>,
    @InjectModel(Size.name)
    private readonly sizeModel: Model<Size>,
  ) {}
  async getProduct({ page, limit }: { page: number; limit: number }) {
    const data = await this.productModel
      .find()
      .limit(limit)
      .skip((page - 1) * limit);
    const total = await this.productModel.countDocuments();

    return {
      data,
      page: {
        currentPage: Number(page),
        totalPage: Math.ceil(total / limit),
      },
    };
  }
  getProductById(_id: string) {
    return this.productModel.findById(_id);
  }

  async postProduct({ sizesID, tagID, ...ProductDto }: ProductDto) {
    const tag = (await this.tagModel.findById(tagID)) ?? 'undefined';
    const sizes = await this.sizeModel.find({ _id: { $in: sizesID } });
    const newProduct = new this.productModel({
      sizes: sizes ?? [],
      tag: tag,
      ...ProductDto,
    });

    return newProduct.save();
  }
  updateProduct(ProductDto: ProductDto, id: string) {
    return this.productModel.findByIdAndUpdate(id, ProductDto);
  }
  deleteProduct(id: string) {
    return this.productModel.findByIdAndDelete(id);
  }
}
