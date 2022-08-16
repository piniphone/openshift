import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';

import { StationModule } from './station/station.module';
import { OperatorModule } from './operator/operator.module';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: '.env' }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        uri: config.get('MONGO_URI') || 'akdhaisudhiu',
      }),
    }),
    AuthModule,
    StationModule,
    OperatorModule,
    UserModule,
  ],
})
export class AppModule {}
