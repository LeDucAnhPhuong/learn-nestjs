import { ProductService } from './product.service';
import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  Param,
  Post,
  Put,
  Query,
  ValidationPipe,
} from '@nestjs/common';
import { ProductDto } from './dto/products.dto';
import { ResponseData } from 'src/global/globalClass';
import { HTTPSMessage } from 'src/global/globalEnum';

@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}
  @Get('/get-all')
  async getProduct(@Query() query) {
    const product = await this.productService.getProduct(query);
    return new ResponseData(
      product,
      'Get all product success',
      HTTPSMessage.SUCCESS,
    );
  }

  @Get('/get-product/:id')
  getProductById(@Param('id') id: string) {
    const selectedProduct = this.productService.getProductById(id);
    if (!selectedProduct) throw new HttpException('PRODUCT NOT FOUND', 404);
    return new ResponseData(
      this.productService.getProductById(id),
      'Get product success',
      HTTPSMessage.SUCCESS,
    );
  }

  @Post('/post-new-product')
  async postProduct(@Body(new ValidationPipe()) productDto: ProductDto) {
    const newProduct = await this.productService.postProduct(productDto);
    if (!newProduct)
      return new ResponseData(null, 'Tag not found', HTTPSMessage.NOT_FOUND);
    return new ResponseData(
      newProduct,
      'Created product success',
      HTTPSMessage.SUCCESS,
    );
  }

  @Put('/update-product/:id')
  async updateProductById(@Body() productDto, @Param('id') id: string) {
    const updatedProduct = await this.productService.updateProduct(
      productDto,
      id,
    );
    if (!updatedProduct) throw new HttpException('PRODUCT NOT FOUND', 404);
    return new ResponseData(
      null,
      'Updated product success',
      HTTPSMessage.SUCCESS,
    );
  }

  @Delete('/delete-product/:id')
  async deleteProduct(@Param('id') id: string) {
    const deletedProduct = await this.productService.deleteProduct(id);
    if (!deletedProduct) throw new HttpException('PRODUCT NOT FOUND', 404);
    return new ResponseData(
      null,
      'Deleted product success',
      HTTPSMessage.SUCCESS,
    );
  }
}
