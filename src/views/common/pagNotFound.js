import React from 'react';

import { navigate } from 'lib';

export const pageNotFound = React.memo(() => {
  return (
    <>
      Page not found
      <button type="primary" onClick={() => navigate.pokemon()}>
        Back to home
      </button>
    </>
  );
});
