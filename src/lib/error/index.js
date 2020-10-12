import { GlobalErrorHandler } from 'global-error-handler';

import { notification } from 'antd';
import { NotificationError, TypeError } from './ErrorTypes';

const globalErrorHandler = new GlobalErrorHandler();

const notificationHandler = (error) => {
  notification.warning({ message: 'Warning!', description: error.message });
};

/**
 *  Registers notification warning
 * * */
globalErrorHandler.register({
  key: NotificationError.name,
  handler: notificationHandler,
});

/**
 *  Registers Type error error
 * * */
globalErrorHandler.register({
  key: TypeError.name,
  handler: notificationHandler,
});

const unhandledError = { constructor: { name: 'default' }, stack: 'Unexpected error occurred.' };

/**
 * For checking errors not handled in Promise objects.
 * * */
window.onunhandledrejection = ({ reason }) => {
  globalErrorHandler.handle(reason ?? unhandledError);
};

/**
 * For all the remaining errors.
 * * */
window.onerror = (message, url, line, column, error) => {
  globalErrorHandler.handle(error ?? unhandledError);
};
