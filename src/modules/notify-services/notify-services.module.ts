import { Module } from '@nestjs/common';
import { TelegramModule } from './telegram/telegram.module';

@Module({
  imports: [
    TelegramModule.forRoot(),
  ],
})
export class NotifyServicesModule {

}
