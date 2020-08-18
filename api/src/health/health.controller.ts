import {
  Controller,
  Get,
  Param,
  Body,
  Post,
  Patch,
  Delete,
  Query,
} from '@nestjs/common';
import { HealthService } from './health.service';

@Controller('health')
export class HealthController {
  constructor(private readonly healthService: HealthService) {}

  @Get()
  findAll(@Query() paginationQuery) {
    return this.healthService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.healthService.findOne(id);
  }

  @Post()
  create(@Body() body) {
    return this.healthService.create(body);
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
