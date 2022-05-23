import axios from 'axios';
import React from 'react';

const UrlRow = ({ url, baseUrl, loadParentData }) => {
  function deleteUrl(shortUrlId) {
    axios.delete(`http://localhost:5001/urls/${shortUrlId}`).then((res) => {
      loadParentData();
    });
  }

  return (
    <tr>
      <td>
        <small>
          <a href={url.bigUrl}> {url.bigUrl}</a>
        </small>
      </td>
      <td>
        <small>
          <a href={baseUrl + url.shortUrl}>{baseUrl + url.shortUrl}</a>
        </small>
      </td>
      <td>
        <small>{url.createdAt.substring(0, 10)}</small>
      </td>
      <td>
        <small>{url.visits}</small>
      </td>
      <td>
        <small>{url.expiry.substring(0, 10)}</small>
      </td>
      <td>
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => deleteUrl(url.shortUrl)}
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default UrlRow;
