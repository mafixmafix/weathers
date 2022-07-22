import { notification } from "antd";

export function errorNotification(description: string) {
  notification.error({
    message: "error",
    placement: "bottomRight",
    description,
  });
}
