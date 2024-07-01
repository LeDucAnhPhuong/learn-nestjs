import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  ValidationPipe,
} from '@nestjs/common';
import { SizeService } from './size.service';
import { SizeDto } from './dto/size.dto';
import { ResponseData } from 'src/global/globalClass';
import { HTTPSMessage } from 'src/global/globalEnum';

@Controller('sizes')
export class SizeController {
  constructor(private readonly sizeService: SizeService) {}
  @Get('/get-all')
  async getAllSizes() {
    const sizes = await this.sizeService.getAllSizes();
    return new ResponseData(
      sizes,
      'Get all sizes success',
      HTTPSMessage.SUCCESS,
    );
  }

  @Post('/create-new-size')
  createNewSize(@Body(new ValidationPipe()) data: SizeDto) {
    const newSize = this.sizeService.createNewSize(data);
    return new ResponseData(
      newSize,
      'Create new size success',
      HTTPSMessage.SUCCESS,
    );
  }

  @Put('/update-size/:id')
  async updateSize(@Body() data, @Param('id') id: string) {
    const updatedSize = await this.sizeService.updateSize(id, data);
    if (!updatedSize)
      return new ResponseData(null, 'Size not found', HTTPSMessage.NOT_FOUND);
    return new ResponseData(
      updatedSize,
      'Updated size success',
      HTTPSMessage.SUCCESS,
    );
  }

  @Delete('/delete-size/:id')
  async deleteSize(@Param('id') id: string) {
    const deletedSize = await this.sizeService.deleteSize(id);
    if (!deletedSize)
      return new ResponseData(null, 'Size not found', HTTPSMessage.NOT_FOUND);
    return new ResponseData(null, 'Deleted size success', HTTPSMessage.SUCCESS);
  }
}
