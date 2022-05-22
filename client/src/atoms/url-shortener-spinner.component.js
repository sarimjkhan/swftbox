import React from 'react';

export default function UrlShortenerSpinner({ show }) {
  return (
    <>
      {show && (
        <div className="spinner-border text-dark" role="status">
          <span className="sr-only"></span>
        </div>
      )}
    </>
  );
}
