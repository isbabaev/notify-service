import { Module } from '@nestjs/common';
import { TelegramBotServiceModule } from './telegram-bot-service/telegram-bot-service.module';

@Module({
  imports: [
    TelegramBotServiceModule,
  ],
})
export class NotifyServicesModule {

}
