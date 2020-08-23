import {
  Controller,
  Get,
  Param,
  Body,
  Post,
  Patch,
  Delete,
  Query,
  HttpException,
  HttpStatus,
  NotFoundException,
} from '@nestjs/common';
import { HealthService } from './health.service';
import { CreateHealthDto } from './dto/create-health.dto';

@Controller('health')
export class HealthController {
  constructor(private readonly healthService: HealthService) {}

  @Get()
  findAll(@Query() paginationQuery) {
    return this.healthService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    throw `A random error`;
    const item = this.healthService.findOne(id);
    if (!item) {
      // throw new HttpException(`Item #${id} not found`, HttpStatus.NOT_FOUND);
      throw new NotFoundException(`Item #${id} not found`);
    }
    return item;
  }

  @Post()
  create(@Body() createHealthDto: CreateHealthDto) {
    return this.healthService.create(createHealthDto);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() body) {
    return this.healthService.update(id, body);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.healthService.remove(id);
  }
}
