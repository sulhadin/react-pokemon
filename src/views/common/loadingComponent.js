import React from 'react';
// import SpinnerImage from '../../assets/images/loadingSpinner.svg';
import SpinnerImage from '../../assets/images/loading.gif';

export const LoadingSpinner = React.memo(() => {
  return (
    <div className="loading-overlay-inline" style={{ textAlign: 'center' }}>
      <img src={SpinnerImage} alt="loading" width={500} />
      <h2>Loading...</h2>
    </div>
  );
});
