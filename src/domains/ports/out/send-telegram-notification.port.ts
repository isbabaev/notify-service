import { SendNotificationPayload } from '../in/send-notification.command';

export const SendTelegramNotificationPortSymbol = Symbol('SendTelegramNotificationPort');

export interface SendTelegramNotificationPort {
  sendTelegramNotification(payload: SendNotificationPayload): Promise<void>;
}
