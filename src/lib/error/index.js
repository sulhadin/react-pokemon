import { GlobalErrorHandler } from 'global-error-handler';

import { NotificationError, TypeError } from './ErrorTypes';

const globalErrorHandler = new GlobalErrorHandler();

const notificationHandler = (error) => {
  alert(error.message);
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

/**
 * For checking errors not handled in Promise objects.
 * * */
window.onunhandledrejection = ({ reason }) => {
  globalErrorHandler.handle(reason);
};

/**
 * For all the remaining errors.
 * * */
window.onerror = (message, url, line, column, error) => {
  globalErrorHandler.handle(error);
};
