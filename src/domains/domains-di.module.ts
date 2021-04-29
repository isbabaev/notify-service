import { FactoryProvider, Module } from '@nestjs/common';
import { TelegramBotServiceDiModule } from '../modules/notify-services/telegram-bot-service/telegram-bot-service-di.module';
import { SendNotificationUseCaseSymbol } from './ports/in/send-notification.use-case';
import { SendNotificationService } from './services/send-notification.service';
import {
  SendTelegramNotificationPort,
  SendTelegramNotificationPortSymbol,
} from './ports/out/send-telegram-notification.port';

const providers: FactoryProvider[] = [
  {
    provide: SendNotificationUseCaseSymbol,
    useFactory: (sendTelegramNotificationPort: SendTelegramNotificationPort) => {
      return new SendNotificationService(sendTelegramNotificationPort);
    },
    inject: [SendTelegramNotificationPortSymbol],
  }
];

@Module({
  imports: [TelegramBotServiceDiModule],
  providers,
  exports: [...providers],
})
export class DomainsDiModule {

}
