import { Module } from '@nestjs/common';
import { TagService } from './tag.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Tag, tagSchema } from './schemas/tag.schema';
import { TagController } from './tag.controller';

@Module({
  providers: [TagService],
  imports: [MongooseModule.forFeature([{ name: Tag.name, schema: tagSchema }])],
  controllers: [TagController],
})
export class TagModule {}
