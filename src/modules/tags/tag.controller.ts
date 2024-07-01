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
import { TagService } from './tag.service';
import { TagDto } from './dto/tag.dto';
import { ResponseData } from 'src/global/globalClass';
import { HTTPSMessage } from 'src/global/globalEnum';

@Controller('tags')
export class TagController {
  constructor(private readonly tagService: TagService) {}

  @Get('/get-all')
  async getTags() {
    const tags = await this.tagService.getTags();
    return new ResponseData(tags, 'Get all tags success', HTTPSMessage.SUCCESS);
  }

  @Post('/create-new-tag')
  async postTag(@Body(new ValidationPipe()) data: TagDto) {
    const tag = await this.tagService.postTag(data);
    return new ResponseData(tag, 'Create tag success', HTTPSMessage.SUCCESS);
  }

  @Put('/update-tag/:id')
  async updateTag(@Param('id') id: string, @Body() data) {
    const tag = await this.tagService.updateTag(id, data);
    if (!tag)
      return new ResponseData(null, 'Tag not found', HTTPSMessage.NOT_FOUND);
    return new ResponseData(tag, 'Updated tag success', HTTPSMessage.SUCCESS);
  }

  @Delete('/delete-tag/:id')
  async deleteTag(@Param('id') id: string) {
    const tag = await this.tagService.deleteTag(id);
    if (!tag)
      return new ResponseData(null, 'Tag not found', HTTPSMessage.NOT_FOUND);
    return new ResponseData(tag, 'Deleted tag success', HTTPSMessage.SUCCESS);
  }
}
