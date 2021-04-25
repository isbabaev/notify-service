import { Inject, Injectable } from '@nestjs/common';
import { Telegraf } from 'telegraf';

@Injectable()
export class BotService {
  constructor(@Inject('TelegrafBot') private readonly bot: Telegraf) {
  }

  async sendMessage(chatId: string | number, text: string): Promise<void> {
    await this.bot.telegram.sendMessage(chatId, text);
    return;
  }
}
