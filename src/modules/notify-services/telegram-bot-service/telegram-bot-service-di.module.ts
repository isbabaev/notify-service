import { FactoryProvider, Module } from '@nestjs/common';
import { SendTelegramNotificationPortSymbol } from '../../../domains/ports/out/send-telegram-notification.port';
import { SendTelegramNotificationAdapter } from './adapters/send-telegram-notification.adapter';
import { TelegramBotService } from './services/telegram-bot.service';
import { TelegramBotServiceModule } from './telegram-bot-service.module';

const providers: FactoryProvider[] = [
  {
    provide: SendTelegramNotificationPortSymbol,
    useFactory: (telegramBotService: TelegramBotService) => {
      return new SendTelegramNotificationAdapter(telegramBotService);
    },
    inject: [TelegramBotService],
  }
];

@Module({
  imports: [TelegramBotServiceModule],
  providers,
  exports: [...providers],
})
export class TelegramBotServiceDiModule {

}
