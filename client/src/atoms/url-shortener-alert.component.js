import React, { useState } from 'react';

export default function UrlShortenerAlert(props) {
  const { message, show } = props.config;
  const [alertVisibility, setAlertVisibility] = useState(show);
  const closeAlert = () => {
    setAlertVisibility(false);
  };

  return (
    <>
      {alertVisibility && (
        <div
          className="alert alert-success alert-dismissible fade show"
          role="alert"
        >
          <strong>{message}</strong>
          <button
            type="button"
            className="close"
            data-dismiss="alert"
            aria-label="Close"
            onClick={() => closeAlert()}
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
      )}
    </>
  );
}
