// notification type : error, success, warning, info
export type NotificationType = "error" | "success" | "warning" | "info";

// notification data type
export type NotificationDataType = {
  title: string;
  message: string;
  type: NotificationType;
  time: string;
};
