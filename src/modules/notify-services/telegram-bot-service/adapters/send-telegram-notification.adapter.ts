import { SendTelegramNotificationPort } from '../../../../domains/ports/out/send-telegram-notification.port';
import { SendNotificationPayload } from '../../../../domains/ports/in/send-notification.command';
import { TelegramBotService } from '../services/telegram-bot.service';

export class SendTelegramNotificationAdapter implements SendTelegramNotificationPort {
  constructor(private readonly telegramBotService: TelegramBotService) {
  }

  sendTelegramNotification(payload: SendNotificationPayload): Promise<void> {
    const {username, message} = payload;
    return this.telegramBotService.sendMessage(username, message);
  }
}
