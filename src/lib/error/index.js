import { GlobalErrorHandler } from 'global-error-handler';

import { AlertError } from './ErrorTypes';

const globalErrorHandler = new GlobalErrorHandler();

const alertHandler = (error) => {
  // eslint-disable-next-line no-alert
  alert(error.message);
};

/**
 *  Registers notification warning
 * * */
globalErrorHandler.register({
  key: AlertError.name,
  handler: alertHandler,
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
