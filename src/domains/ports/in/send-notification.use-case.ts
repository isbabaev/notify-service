import { SendNotificationCommand } from './send-notification.command';

export const SendNotificationUseCaseSymbol = Symbol('SendNotificationUseCase');

export interface SendNotificationUseCase {
  sendNotification(command: SendNotificationCommand): Promise<void>;
}
