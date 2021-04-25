import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { NotifyServicesModule } from './modules/notify-services/notify-services.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    NotifyServicesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
