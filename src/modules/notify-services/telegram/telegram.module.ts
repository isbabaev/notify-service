import { DynamicModule, Module } from '@nestjs/common';
import { Telegraf } from 'telegraf';
import { BotService } from './services/bot.service';

@Module({})
export class TelegramModule {
  static forRoot(): DynamicModule {
    return {
      providers: [
        {
          provide: 'TelegrafBot',
          useFactory: async () => {
            const bot = new Telegraf(process.env.BOT_TOKEN);
            await bot.launch();

            return bot;
          }
        },
        BotService,
      ],
      module: TelegramModule,
    }
  }
}
