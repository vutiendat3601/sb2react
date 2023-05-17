import { notification } from "antd";

const openNotification = (type, message, description) => {
  notification[type]({
    message,
    description,
  });
};

const successNotification = (message, description) =>
  openNotification("sucess", message, description);

const infoNotification = (message, description) =>
  openNotification("info", message, description);

const warningNotification = (message, description) =>
  openNotification("warning", message, description);

const errorNotification = (message, description) =>
  openNotification("error", message, description);

export {
  successNotification,
  infoNotification,
  warningNotification,
  errorNotification,
};
