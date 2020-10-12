import React from 'react';
import SpinnerImage from '../../assets/images/loadingSpinner.svg';

export const LoadingSpinner = React.memo(() => {
  return (
    <div className="loading-overlay-inline" style={{ textAlign: 'center' }}>
      <SpinnerImage />
    </div>
  );
});
