import {
  CacheInterceptor,
  CacheTTL,
  Controller,
  Get,
  Param,
  UseInterceptors,
} from '@nestjs/common';
import { WeathersService } from './weathers.service';

@Controller('weathers')
export class WeathersController {
  constructor(private readonly weathersService: WeathersService) {}

  @UseInterceptors(CacheInterceptor)
  @CacheTTL(60 * 60)
  @Get('findByCity/:city?')
  async findByCity(@Param('city') city?: string): Promise<any> {
    return this.weathersService.findByCity(city);
  }
}
