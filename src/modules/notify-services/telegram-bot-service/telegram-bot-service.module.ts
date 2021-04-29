import { Module, Provider } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { TelegramBotService } from './services/telegram-bot.service';

const providers: Provider[] = [
  TelegramBotService
];

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'TELEGRAM_BOT_SERVICE',
        transport: Transport.RMQ,
        options: {
          urls: ['amqp://localhost:5672'],
          queue: 'main_queue',
          queueOptions: {
            durable: false
          },
        },
      },
    ]),
  ],
  providers,
  exports: [...providers],
})
export class TelegramBotServiceModule {}
