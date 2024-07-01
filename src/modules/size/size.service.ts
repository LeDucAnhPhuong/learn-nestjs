import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Size } from './schema/size.schema';
import { Model } from 'mongoose';
import { SizeDto } from './dto/size.dto';

@Injectable()
export class SizeService {
  constructor(
    @InjectModel(Size.name) private readonly sizeModel: Model<Size>,
  ) {}
  async getAllSizes() {
    const sizes = await this.sizeModel.find();
    return sizes;
  }
  createNewSize(data: SizeDto) {
    const newSize = new this.sizeModel(data);
    return newSize.save();
  }

  updateSize(id: string, data: SizeDto) {
    return this.sizeModel.findByIdAndUpdate(id, data);
  }

  deleteSize(id: string) {
    return this.sizeModel.findByIdAndDelete(id);
  }
}
