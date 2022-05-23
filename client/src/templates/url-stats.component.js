import axios from 'axios';
import { isEmpty } from 'lodash';
import React, { Component } from 'react';
import UrlStatsItem from '../organisms/url-stats-item.component';

export default class UrlStats extends Component {
  constructor(props) {
    super(props);
    this.state = {
      urlPathId: '',
      urlStats: {},
    };
    this.onGetStats = this.onGetStats.bind(this);
    this.onChangeUrl = this.onChangeUrl.bind(this);
  }

  async onGetStats() {
    const shortUrlPathId = this.state.urlPathId;
    const response = await axios.get(
      `http://localhost:5001/urls/statistics/${shortUrlPathId}`
    );

    this.setState({
      urlStats: response.data.url,
    });
  }

  onChangeUrl(e) {
    const shortUrl = e.target.value;
    this.setState({
      urlPathId: shortUrl.substring(shortUrl.lastIndexOf('/') + 1),
    });
  }

  render() {
    return (
      <form>
        <div className="form-group">
          <div className="row">
            <div className="col-md-12">
              <label for="urlTextbox">Enter Short Url</label>
            </div>
          </div>
          <div className="row">
            <div className="col-md-10">
              <input
                type="text"
                className="form-control mb-1"
                id="urlTextbox"
                placeholder="Enter url"
                onChange={this.onChangeUrl}
              />
            </div>
            <div className="col-md-2">
              <button
                type="button"
                className="btn btn-primary"
                onClick={this.onGetStats}
              >
                Get Url Stats
              </button>
            </div>
          </div>

          <small className="form-text text-muted">
            Url short url format examples:
            <br />
            1) contains /[ten-digit-path-id] --
            http://localhost:5001/[ten-digit-path-id]
            <br />
            2) contains [ten-digit-path-id]
          </small>
        </div>

        <br />
        <div className="mt-3">
          {!isEmpty(this.state.urlStats) && (
            <>
              <h1>Url Details:</h1>
              <UrlStatsItem url={this.state.urlStats} />
            </>
          )}
        </div>
      </form>
    );
  }
}
