import { HttpModule } from '@nestjs/axios';
import { CacheInterceptor, CacheModule, Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { APP_INTERCEPTOR } from '@nestjs/core';
import mongoStore from 'cache-manager-mongodb';
import { WeathersController } from './weathers.controller';
import { WeathersService } from './weathers.service';

@Module({
  imports: [
    HttpModule,
    CacheModule.registerAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        store: mongoStore,
        uri: configService.get('MONGODB_URI'),
      }),
      inject: [ConfigService],
    }),
  ],
  controllers: [WeathersController],
  providers: [
    WeathersService,
    {
      provide: APP_INTERCEPTOR,
      useClass: CacheInterceptor,
    },
  ],
})
export class WeathersModule {}
