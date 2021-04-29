import { SendNotificationUseCase } from '../ports/in/send-notification.use-case';
import { SendNotificationCommand } from '../ports/in/send-notification.command';
import { SendTelegramNotificationPort } from '../ports/out/send-telegram-notification.port';

export class SendNotificationService implements SendNotificationUseCase {
  constructor(private readonly sendTelegramNotificationPort: SendTelegramNotificationPort) {
  }

  sendNotification(command: SendNotificationCommand): Promise<void> {
    switch (command.service) {
      case 'telegram': {
        return this.sendTelegramNotificationPort.sendTelegramNotification(command.payload);
      }
    }
  }
}
