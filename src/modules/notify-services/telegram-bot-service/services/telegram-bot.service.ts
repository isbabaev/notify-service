import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class TelegramBotService {
  constructor(@Inject('TELEGRAM_BOT_SERVICE')
              private readonly client: ClientProxy) {
  }

  async sendMessage(username: string, text: string): Promise<void> {
    return this.client.emit('send-message', {username, text}).toPromise();
  }
}
