import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { WeathersModule } from './weathers/weathers.module';

@Module({
  imports: [ConfigModule.forRoot(), WeathersModule],
})
export class AppModule {}
