import React from 'react';

export default function UrlStatsItem({ url }) {
  return (
    <>
      <ul className="list-group">
        <li className="list-group-item">Short Url Path: {url.shortUrl}</li>
        <li className="list-group-item">Big Url Path: {url.bigUrl}</li>
        <li className="list-group-item">Url Visits: {url.visits}</li>
        <li className="list-group-item">
          Expiry: {url.expiry.substring(0, 10)}
        </li>
      </ul>
    </>
  );
}
