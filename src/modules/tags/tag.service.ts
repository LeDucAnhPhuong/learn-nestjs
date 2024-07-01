import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Tag } from './schemas/tag.schema';
import { SizeDto } from '../size/dto/size.dto';

@Injectable()
export class TagService {
  constructor(
    @InjectModel(Tag.name)
    private readonly tagModel: Model<Tag>,
  ) {}
  async getTags() {
    const tags = await this.tagModel.find();
    return tags;
  }

  postTag(data) {
    const tag = new this.tagModel(data);
    return tag.save();
  }

  updateTag(id: string, data: SizeDto) {
    return this.tagModel.findByIdAndUpdate(id, data);
  }

  deleteTag(data) {
    return this.tagModel.findByIdAndDelete(data);
  }
}
