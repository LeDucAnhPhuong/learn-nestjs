import { Module } from '@nestjs/common';
import { SizeService } from './size.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Size, sizeSchema } from './schema/size.schema';
import { SizeController } from './size.controller';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Size.name, schema: sizeSchema }]),
  ],
  providers: [SizeService],
  controllers: [SizeController],
})
export class SizeModule {}
