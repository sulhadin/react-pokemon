import Axios from 'axios';
import { NotificationError } from 'lib/error/ErrorTypes';

const get = (endpoint, params) => {
  return Axios.get(endpoint, { params })
    .then((response) => {
      return response;
    }).catch((error) => {
    // Error 😨
      if (error.response) {
      /*
         * The request was made and the server responded with a
         * status code that falls out of the range of 2xx
         */
        console.error(error.response.data);
        throw new NotificationError(error.response.data.message);
      } else if (error.request) {
      /*
         * The request was made but no response was received, `error.request`
         * is an instance of XMLHttpRequest in the browser and an instance
         * of http.ClientRequest in Node.js
         */
        throw new Error(error.request);
      } else {
      // Something happened in setting up the request and triggered an Error
        throw new Error('Error', error.message);
      }
    });
};

export default {
  get,
};
