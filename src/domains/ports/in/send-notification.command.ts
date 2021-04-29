export interface SendNotificationCommand {
  payload: SendNotificationPayload;
  service: NotificationService;
}

export type SendNotificationPayload = SendTelegramNotificationPayload;

export interface SendTelegramNotificationPayload {
  username: string;
  message: string;
}

export type NotificationService = 'telegram';

