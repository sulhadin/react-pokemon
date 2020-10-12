import React from 'react';
import LoadingSpinner from 'assets/images/loadingSpinner.svg';

export const loadingComponent = React.memo(() => {
  return (
    <div className="loading-overlay-inline" style={{ textAlign: 'center' }}>
      <LoadingSpinner />
    </div>
  );
});
