import React from 'react';

import { navigate } from 'lib';

import notFoundImage from '../../assets/images/notFound.png';

export const pageNotFound = React.memo(() => {
  return (
    <div className="page-not-found">
      <img
        alt="Not found"
        src={notFoundImage}
      />
      <button type="button" onClick={() => navigate.pokemon()}>
        Back to home
      </button>
    </div>
  );
});
