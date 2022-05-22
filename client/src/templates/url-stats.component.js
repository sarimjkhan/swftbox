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
          <label for="urlTextbox">Enter Short Url</label>
          <input
            type="text"
            className="form-control mb-1"
            id="urlTextbox"
            placeholder="Enter url"
            onChange={this.onChangeUrl}
          />
        </div>
        <div>
          <button
            type="button"
            className="btn btn-primary"
            onClick={this.onGetStats}
          >
            Get Url Stats
          </button>
        </div>

        <br />
        <div>
          {!isEmpty(this.state.urlStats) && (
            <UrlStatsItem url={this.state.urlStats} />
          )}
        </div>
        {/* <div>
          {this.state.urlStats.bigUrl && <h3>Original Url:</h3>}
          <small>
            <a href={this.state.urlStats.bigUrl}>
              {this.state.urlStats.bigUrl}
            </a>
          </small>
        </div>

        <div>
          {this.state.urlStats.shortUrl && <h3>Shortened Url:</h3>}
          <small>
            <a href={this.state.urlStats.shortUrl}>
              {this.state.urlStats.shortUrl}
            </a>
          </small>
        </div> */}
      </form>
    );
  }
}
